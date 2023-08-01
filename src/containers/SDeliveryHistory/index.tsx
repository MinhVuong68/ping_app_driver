import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ResultCard from './components/ResultCard'
import styles from './styles/SDeliveryHistoryStyle'
import OrderCard from './components/OrderCard'
import ModalCalendarPicker from './components/ModalCalendarPicker'

import { Colors, Layout } from '@/theme'

const SDeliveryHistory = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={[Layout.full, styles.container]}>
      <View style={styles.viewCardsResult}>
        <ResultCard icon="truck" title="Số chuyến" result={2} color="#00a147" />
        <ResultCard
          icon="coins"
          title="Thu nhập"
          result={150000}
          color="#00724D"
        />
      </View>
      <View style={styles.viewDate}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.btnChangeDate}>
          <Text style={{ color: '#fff' }}>Thay đổi</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>31-07-2023</Text>
      </View>

      <ModalCalendarPicker
        isVisible={modalVisible}
        setVisible={setModalVisible}
      />
      <View style={styles.lCardOrder}>
        <OrderCard
          id={1}
          time="10:23:15"
          date="23-07-2023"
          fromAddress="15/8 Trần Nhân Tông, Quận 7, TP.HCM"
          toAddress="95 Lý Thường Kiệt, Quận 11, TP.HCM"
          totalPrice={1500000}
        />
        <OrderCard
          id={1}
          time="10:23:15"
          date="23-07-2023"
          fromAddress="15/8 Trần Nhân Tông, Quận 7, TP.HCM"
          toAddress="95 Lý Thường Kiệt, Quận 11, TP.HCM"
          totalPrice={1500000}
        />
      </View>
    </View>
  )
}

export default SDeliveryHistory
