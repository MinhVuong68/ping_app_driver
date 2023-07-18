import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Color from '../theme/Colors';
import { Colors } from '../theme';
import { Icon } from '@/components'

interface InputProps {
  title: string;
  subHeader?: string;
}

const Header = ({ title = '', subHeader = '' }: InputProps) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type="AntDesign"
            name="arrowleft"
            color={Colors.primary}
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      {!!subHeader && (
        <View style={styles.subHeader}>
          <Text style={styles.txtSubHeader}>{subHeader}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.borderBottom,
  },
  txtTitle: {
    color: Color.text,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  subHeader: {
    height: 40,
    backgroundColor: '#f2f3f5',
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  txtSubHeader: {
    fontSize: 13,
    color: Color.text,
  },
});

export default React.memo(Header);
