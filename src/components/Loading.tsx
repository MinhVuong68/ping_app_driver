import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import Color from '../theme/Colors';
import { Layout } from '../theme';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight =
  Platform.OS === 'ios'
    ? Dimensions.get('window').height
    : require('react-native-extra-dimensions-android').get(
        'REAL_WINDOW_HEIGHT',
      );

interface loadingProps {
  isLoading: boolean;
  backBtn?: any;
}
const Loading = ({ isLoading = false, backBtn = () => {} }: loadingProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationOutTiming={400}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      isVisible={loading}
      backdropOpacity={0.5}
      onBackButtonPress={() => backBtn(false)}>
      <View style={[Layout.full,Layout.center]}>
        <View style={styles.container}>
          <ActivityIndicator color={Color.primary} />
          <Text style={{ color: Color.text }}>Đang xử lý...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Loading;
