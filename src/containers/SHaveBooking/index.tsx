import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux'

import { Layout } from '@/theme'
import CardInfoCustomer from './components/CardInfoCustomer'
import CardInfoLocation from './components/CardInfoLocation'
import { Button } from '@/components'
import { RootState } from '@/redux/store'
import { navigate } from '@/navigators/utils'

const SHaveBooking = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  return (
    <View style={[Layout.full, styles.container]}>
      <CardInfoCustomer />
      <CardInfoLocation />
      <View style={[Layout.rowSB, styles.viewBtns]}>
        <Button
          title="Từ chối"
          style={{ ...styles.btn, backgroundColor: 'red' }}
        />
        <Button
          title="Nhận đơn"
          style={{ ...styles.btn, backgroundColor: 'green' }}
        />
      </View>
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
