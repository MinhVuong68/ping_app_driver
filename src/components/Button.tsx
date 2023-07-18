import { Colors } from '@/theme'
import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native'

type ButtonProps = {
  title: string
  onPress?: () => any
  style?: ViewStyle
  titleStyle?: TextStyle
  size?: 'small' | 'medium' | 'large'
}

let DEFAULT_BUTTON_WIDTH = Dimensions.get('window').width * 0.58

const Button = ({ title, onPress, style, titleStyle, size }: ButtonProps) => {
  let containerWidth = DEFAULT_BUTTON_WIDTH
  switch (size) {
    case 'small':
      containerWidth *= 0.6
      break
    case 'large':
      containerWidth = DEFAULT_BUTTON_WIDTH * 1.5
      break
    default:
      containerWidth
  }
  return (
    <TouchableOpacity
      style={[styles.container, { width: containerWidth }, style]} onPress={onPress}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
  },
})

export default Button
