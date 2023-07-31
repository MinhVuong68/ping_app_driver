import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { Colors, Fonts, Images, Layout } from '@/theme'
import CardContact from './components/CardContact'
import { Button, EmptyView, Icon } from '@/components'
import ItemInfo from './components/ItemInfo'
import ItemPayment from './components/ItemPayMent'
import { navigate } from '@/navigators/utils'
import { Linking } from 'react-native'
import { RootState, useAppDispatch } from '@/redux/store'
import {
  getOrdersByOrderStatusAndDriverId,
  updateOrderStatus,
} from '@/redux/user/userSlice'
import { useSelector } from 'react-redux'
import {
  BOOKING_STATE_COMING,
  BOOKING_STATE_COMPLETE,
} from '@/configs/constants'
import { formatDate, formatTime } from '@/utils'
import {
  deleteOrderByOrderId_F,
  updateOrderStatus_F,
} from '@/firebase/services'

const SOrderDelivering = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isOrderPending = useSelector(
    (state: RootState) => state.user.isOrderPending,
  )
  const dispatch = useAppDispatch()

  const [order, setOrder] = useState<any>({})

  useFocusEffect(
    React.useCallback(() => {
      const getOrder = async () => {
        try {
          const res: any = await dispatch(
            getOrdersByOrderStatusAndDriverId({
              orderStatus: BOOKING_STATE_COMING,
              driverId: currentUser.id,
            }),
          ).unwrap()
          console.log('m', res)

          if (res.length) {
            setOrder(res[0])
          }
        } catch (error) {}
      }
      getOrder()
    }, []),
  )

  const onGo = (latitude: number, longitude: number) => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    )
  }

  console.log(order)

  const onPressComplete = async () => {
    try {
      await dispatch(
        updateOrderStatus({
          driverId: currentUser.id,
          orderStatus: BOOKING_STATE_COMPLETE,
          orderId: order?.id,
        }),
      ).unwrap()
      await updateOrderStatus_F(order?.id, BOOKING_STATE_COMPLETE)
      await deleteOrderByOrderId_F(order?.id)
      navigate('SHome')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Layout.full}>
      {!isOrderPending && order.id ? (
        <View style={styles.contents}>
          <Text>
            {formatTime(order.customerRequireAt)} |{' '}
            {formatDate(order.customerRequireAt)}
          </Text>
          <Text style={[Fonts.textLargeBold, { marginTop: 10 }]}>
            {order.id}
          </Text>
          <CardContact
            linkAvatar={order?.customer?.avatar}
            name={order?.customer?.name}
            phoneContact={order?.customer?.phoneContact}
            orderId={order?.id}
          />
          <View style={styles.viewLocation}>
            <View style={Layout.rowVCenter}>
              <Icon
                type="FontAwesome"
                name="dot-circle-o"
                color="green"
                size={22}
              />
              <Pressable
                style={[Layout.col, { marginLeft: 10 }]}
                onPress={() => onGo(order?.fromLatitude, order?.fromLongitude)}>
                <Text>Nhận hàng:</Text>
                <Text style={Fonts.textRegular}>{order?.fromAddress}</Text>
              </Pressable>
            </View>
            <Icon type="Entypo" name="dots-three-vertical" size={22} />
            <View style={Layout.rowVCenter}>
              <Icon
                type="Entypo"
                name="location-pin"
                color={Colors.primary}
                size={22}
              />
              <Pressable
                style={[Layout.col, { marginLeft: 10 }]}
                onPress={() => onGo(order?.toLatitude, order?.toLongitude)}>
                <Text>Giao hàng:</Text>
                <Text style={[Fonts.textRegular, Layout.rowVCenter]}>
                  {order?.toAddress}
                </Text>
              </Pressable>
            </View>
          </View>
          <ItemInfo
            icon={{ type: 'FontAwesome', name: 'truck', color: Colors.primary }}
            text={`${order?.driver?.vehicle?.nameVehicle} ${order?.driver?.vehicle?.weight} Kg`}
          />

          {order?.backTo && (
            <ItemInfo
              icon={{
                type: 'MaterialIcons',
                name: 'published-with-changes',
                color: Colors.primary,
              }}
              text="Quay lại điểm nhận hàng"
            />
          )}

          <ItemInfo
            icon={{
              type: 'MaterialCommunityIcons',
              name: 'note-edit-outline',
              color: Colors.primary,
            }}
            text={`${order?.customerNote}`}
          />

          <ItemPayment
            price={order?.price}
            discountMoney={order?.priceDiscount}
            totalPrice={order?.totalPrice}
          />
          <View style={Layout.colVCenter}>
            <Button
              title="Kết thúc chuyến"
              onPress={() => {
                Alert.alert(
                  '',
                  'Bạn đã hoàn thành vận chuyển cho đơn hàng này',
                  [
                    {
                      text: 'Hủy',
                      style: 'cancel',
                    },
                    { text: 'Đồng ý', onPress: onPressComplete },
                  ],
                )
              }}
              style={{ marginTop: 15 }}
            />
          </View>
        </View>
      ) : (
        <EmptyView
          image={Images.notOrder}
          title="Không có đơn hàng nào ở trạng thái này! "
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    padding: 10,
  },
  viewLocation: {
    paddingVertical: 10,
    borderBottomColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
})

export default SOrderDelivering
