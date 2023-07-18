import { StyleSheet } from 'react-native';

import { Colors } from '../../../theme';

const styles = StyleSheet.create({
  viewIntro: {
    flex: 1,
  },
  viewBtnGroup: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
  },
  txtHeader: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 34,
    color: Colors.primary,
  },
});

export default styles;
