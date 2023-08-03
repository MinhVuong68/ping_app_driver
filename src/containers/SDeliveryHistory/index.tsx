import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import { Images, Layout } from '@/theme'
import { formatCurrency, formatDate, formatTime } from '@/utils'
import { RootState, useAppDispatch } from '@/redux/store'
import { getOrdersCompletedByDriverIdAndDate } from '@/redux/user/userSlice'
import { EmptyView } from '@/components'
import OrderCard from './components/OrderCard'
import ResultCard from './components/ResultCard'
import styles from './styles/SDeliveryHistoryStyle'
import ModalCalendarPicker from './components/ModalCalendarPicker'

const SDeliveryHistory = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const dispatch = useAppDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [date, setDate] = useState(formatDate(new Date().toDateString()))
  const [data, setData] = useState<any>({
    orders: [],
    loading: true,
  })

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res: any = await dispatch(
          getOrdersCompletedByDriverIdAndDate({
            driverId: currentUser.id,
            date,
          }),
        ).unwrap()
        setData({ ...data, orders: res })
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
  }, [date])
  return (
    <View style={[Layout.full, styles.container]}>
      <View style={styles.viewCardsResult}>
        <ResultCard
          icon="truck"
          title="Số chuyến"
          result={data.orders.totalBill}
          color="#00a147"
        />
        <ResultCard
          icon="coins"
          title="Thu nhập"
          result={formatCurrency(data.orders.revenue)}
          color="#00724D"
        />
      </View>
      <View style={styles.viewDate}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btnChangeDate}>
          <Text style={{ color: '#fff' }}>Thay đổi</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>{date}</Text>
      </View>
      <ModalCalendarPicker
        isVisible={modalVisible}
        setVisible={setModalVisible}
        setValue={setDate}
      />
      <View style={styles.lCardOrder}>
        {data.orders.orders.length == 0 ? (
          <EmptyView
            image={Images.notOrder}
            title={`Không có đơn hàng nào vào ngày ${date}`}
          />
        ) : (
          <FlatList
            data={data.orders?.orders}
            renderItem={({ item }: any) => (
              <OrderCard
                id={item.id}
                date={formatDate(item.customerRequireAt)}
                time={formatTime(item.customerRequireAt)}
                fromAddress={item.fromAddress}
                toAddress={item.toAddress}
                totalPrice={item.totalPrice}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default SDeliveryHistory
