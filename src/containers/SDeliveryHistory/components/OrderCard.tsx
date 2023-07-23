import { Icon } from '@/components'
import { Colors, Fonts, Images, Layout } from '@/theme'
import { formatCurrency } from '@/utils'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

type CardOrderProps = {
  id: number
  date: string
  time: string
  fromAddress: string
  toAddress: string
  totalPrice: number
}

const CardOrder = ({
  id,
  date,
  time,
  fromAddress,
  toAddress,
  totalPrice,
}: CardOrderProps) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container}>
      <View>
        <Text>{`${date} | ${time}`}</Text>
        <View style={styles.viewLocation}>
          <View style={Layout.rowVCenter}>
            <Icon
              type="FontAwesome"
              name="dot-circle-o"
              color="green"
              size={22}
            />
            <Text style={[Fonts.textRegular, { marginLeft: 10 }]}>
              {fromAddress}
            </Text>
          </View>
          <Icon type="Entypo" name="dots-three-vertical" size={22} />
          <View style={Layout.rowVCenter}>
            <Icon
              type="Entypo"
              name="location-pin"
              color={Colors.primary}
              size={22}
            />
            <Text
              style={[
                Fonts.textRegular,
                Layout.rowVCenter,
                { marginLeft: 10 },
              ]}>
              {toAddress}
            </Text>
          </View>
        </View>
        <View style={[Layout.rowVCenter, { marginVertical: 10 }]}>
          <Image source={Images.money} />
          <Text style={[Fonts.textLargeBold, { marginLeft: 10 }]}>
            {formatCurrency(totalPrice)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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
    paddingVertical: 10,
    borderBottomColor: Colors.borderBottom,
    borderBottomWidth: 1,
  },
})

export default CardOrder
