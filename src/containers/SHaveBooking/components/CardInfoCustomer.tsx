import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import { Fonts, Layout } from '@/theme'

const CardInfoCustomer = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/ping-5ccd1.appspot.com/o/images%2Fmira.jfif?alt=media&token=9f645da4-eb52-4010-914c-d00a44697028',
        }}
        style={styles.avatar}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={Fonts.textRegularBold}>Nguyễn Minh Vương</Text>
        <Text>150000 vnđ</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 6,
    resizeMode: 'contain'
  },
})

export default CardInfoCustomer
