import React from 'react'
import { Text, View } from 'react-native'

import Icon, { IconProps } from '@/components/Icon'
import { Fonts, Layout } from '@/theme'

interface ItemInfoProps {
  icon: IconProps
  text: string
}

const ItemInfo = ({ icon, text }: ItemInfoProps) => {
  return (
    <View style={[Layout.rowVCenter, { marginVertical: 5 }]}>
      <Icon type={icon.type} name={icon.name} color={icon.color} size={20} />
      <Text style={[Fonts.textRegularBold, { marginLeft: 10 }]}>{text}</Text>
    </View>
  )
}

export default ItemInfo
