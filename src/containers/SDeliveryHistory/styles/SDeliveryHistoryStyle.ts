import { Colors } from '@/theme'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  viewCardsResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lCardOrder: {
    marginTop: 10
  },
  viewDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  btnChangeDate: {
    marginLeft: 10,
    width: 80,
    backgroundColor: Colors.primary,
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
