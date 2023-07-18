import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image, Text, StyleSheet } from 'react-native';

import { Colors, Layout } from '../../../theme';

interface IIntroProps {
  imgLink: any;
  title: string;
  content: string;
}

const screenSizeWidth = Dimensions.get('window').width;

const Intro = ({
  imgLink = require('../../../assets/images/intro1.png'),
  title = '',
  content = '',
}: IIntroProps) => {
  return (
    <View style={Layout.center}>
      <Image style={styles.image} source={imgLink} />
      <View style={styles.contentView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenSizeWidth,
  },
  contentView: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 150,
  },
  title: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  content: {
    textAlign: 'center',
  },
});

export default Intro;
