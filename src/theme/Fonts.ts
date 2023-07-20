import { StyleSheet } from 'react-native'
import Colors from './Colors'

let SIZE_TEXT_NORMAL = 14

const Fonts = StyleSheet.create({
  textSmall: {
    fontSize: SIZE_TEXT_NORMAL * 0.8,
    color: Colors.text,
  },
  textRegular: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
  },
  textRegularBold: {
    fontSize: SIZE_TEXT_NORMAL,
    color: Colors.text,
    fontWeight: 'bold',
  },
  textLargeBold: {
    fontSize: SIZE_TEXT_NORMAL * 1.2,
    color: Colors.text,
    fontWeight: 'bold',
  },
})

export default Fonts
