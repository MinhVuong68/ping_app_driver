import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { Images, Layout } from '@/theme'
import CardInfoCustomer from './components/CardInfoCustomer'
import CardInfoLocation from './components/CardInfoLocation'
import { Button, EmptyView } from '@/components'
import { RootState, useAppDispatch } from '@/redux/store'
import { navigate } from '@/navigators/utils'
import { BOOKING_STATE_COMING } from '@/configs/constants'
import { setOrderPending, updateOrderStatus } from '@/redux/user/userSlice'
import { updateOrderStatus_F } from '@/firebase/services'

const SHaveBooking = ({ route }: any) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const isOrderPending = useSelector(
    (state: RootState) => state.user.isOrderPending,
  )

  const dispatch = useAppDispatch()


  const handleReceiveOrder = async () => {
    try {
      await dispatch(
        updateOrderStatus({
          driverId: route.params.driverId,
          orderStatus: BOOKING_STATE_COMING,
        }),
      ).unwrap()
      await updateOrderStatus_F(route.params.orderId, BOOKING_STATE_COMING)
      dispatch(setOrderPending(false))
      navigate('SOrderDelivering')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={[Layout.full, styles.container]}>
      {isOrderPending ? (
        <>
          <CardInfoCustomer
            uri={route.params.customerAvatar}
            name={route.params.customerName}
            price={route.params.totalPrice}
          />
          <CardInfoLocation
            fromAddress={route.params.fromAddress}
            toAddress={route.params.toAddress}
          />
          <View style={[Layout.rowSB, styles.viewBtns]}>
            <Button
              title="Từ chối"
              style={{ ...styles.btn, backgroundColor: 'red' }}
            />
            <Button
              title="Nhận đơn"
              style={{ ...styles.btn, backgroundColor: 'green' }}
              onPress={handleReceiveOrder}
            />
          </View>
        </>
      ) : (
        <>
          <EmptyView image={Images.notOrder} title="Không có đơn hàng ở trạng thái này"/>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  viewBtns: {
    marginTop: 35,
    marginHorizontal: 10,
  },
  btn: {
    width: '40%',
  },
})

export default SHaveBooking
