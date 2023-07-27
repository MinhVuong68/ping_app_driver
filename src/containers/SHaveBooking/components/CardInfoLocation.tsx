import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Icon } from '@/components'
import { Colors, Fonts, Layout } from '@/theme'

interface CardInfoLocationProps {
  fromAddress: string
  toAddress: string
}

const CardInfoLocation = ({
  fromAddress,
  toAddress,
}: CardInfoLocationProps) => {
  return (
    <View>
      <View style={styles.viewLocation}>
        <View style={Layout.rowVCenter}>
          <Icon
            type="FontAwesome"
            name="dot-circle-o"
            color="green"
            size={22}
          />
          <View style={[Layout.col, { marginLeft: 10 }]}>
            <Text>Nhận hàng:</Text>
            <Text style={[Fonts.textRegular]}>{fromAddress}</Text>
          </View>
        </View>
        <Icon type="Entypo" name="dots-three-vertical" size={22} />

        <View style={Layout.rowVCenter}>
          <Icon
            type="Entypo"
            name="location-pin"
            color={Colors.primary}
            size={22}
          />
          <View style={[Layout.col, { marginLeft: 10 }]}>
            <Text>Giao hàng:</Text>
            <Text style={[Fonts.textRegular, Layout.rowVCenter]}>
              {toAddress}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    borderWidth: 1,
    borderColor: Colors.borderBottom,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  viewLocation: {
    padding: 10,
    borderColor: Colors.borderBottom,
    borderWidth: 0.5,
  },
})

export default CardInfoLocation
