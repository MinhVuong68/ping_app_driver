import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '../theme';

const DEFAULT_IMAGE_WIDTH = 90;

interface ImageAvartarProps {
  uri: string;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => any;
}

const ImageAvartar = ({ uri, size, onPress }: ImageAvartarProps) => {
  let containerWidth = DEFAULT_IMAGE_WIDTH;
  switch (size) {
    case 'small':
      containerWidth *= 0.6;
      break;
    case 'large':
      containerWidth *= 2;
      break;
    default:
      containerWidth;
  }
  return (
    <View
      style={[
        styles.container,
        {
          width: containerWidth,
          height: containerWidth,
          borderRadius: containerWidth / 2,
        },
      ]}>
      <Image source={{ uri: uri }} style={styles.imageAvatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageAvatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageAvartar;
