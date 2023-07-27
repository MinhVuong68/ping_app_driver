import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import { Fonts, Layout } from '@/theme'
import { formatCurrency } from '@/utils'

interface CardInfoCustomerProps {
  uri: string
  name: string
  price: number
}

const CardInfoCustomer = ({ uri, name, price }: CardInfoCustomerProps) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={{
          uri: uri,
        }}
        style={styles.avatar}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={Fonts.textRegularBold}>{name}</Text>
        <Text>{formatCurrency(price)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 6,
    resizeMode: 'contain',
  },
})

export default CardInfoCustomer
