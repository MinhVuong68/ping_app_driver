import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { Fonts, Images, Layout } from '@/theme'

interface EmptyViewProps {
    image: any,
    title: string
}

const EmptyView = ({image, title}:EmptyViewProps) => {
  return (
    <View style={[Layout.full, styles.container]}>
      <Image style={styles.img} source={image} />
      <Text style={Fonts.textLargeBold}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
})
export default EmptyView
