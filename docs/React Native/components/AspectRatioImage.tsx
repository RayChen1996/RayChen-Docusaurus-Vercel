import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CachedImage} from '@georstat/react-native-image-cache';
import type {IProps} from '@georstat/react-native-image-cache/src/types';

import styleSeparator from '../lib/styleSeparator';
import stylesMerge from '../lib/stylesMerge';

interface AspectRatioImageProps extends Omit<IProps, 'onError'> {
  onError?: () => void;
}

/** - 自動計算圖片原始比例 */
export default function AspectRatioImage({
  style,
  ...props
}: AspectRatioImageProps) {
  const {source} = props;
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [_radiusStyles] = styleSeparator(style, ['borderRadius']);

  useEffect(() => {
    if (source) {
      Image.getSize(
        source,
        (width, height) => {
          setImageWidth(width);
          setImageHeight(height);
        },
        () => {
          setImageWidth(0);
          setImageHeight(0);
        },
      );
    }
  }, [source]);

  if (!imageWidth || !imageHeight) {
    return null;
  }

  return (
    <View
      style={stylesMerge(
        styles.container,
        {
          aspectRatio: imageWidth / imageHeight,
        },
        _radiusStyles,
      )}>
      <CachedImage {...props} style={StyleSheet.compose(styles.image, style)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {overflow: 'hidden'},
  image: {
    width: '100%',
    height: '100%',
  },
});
