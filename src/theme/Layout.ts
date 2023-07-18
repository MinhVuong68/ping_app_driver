import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  full: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowVCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowHCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column'
  },
  colVCenter: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  }
});
