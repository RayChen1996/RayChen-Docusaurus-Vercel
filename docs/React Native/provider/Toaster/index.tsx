import {StyleSheet, View, useColorScheme, type ViewStyle} from 'react-native';
import React, {useMemo} from 'react';
import {
  useSafeAreaInsets,
  type EdgeInsets,
} from 'react-native-safe-area-context';
import {useToaster, type Toast} from 'react-hot-toast/headless';

import type {ToasterProps} from './type';

import ToastItem from './Toast';

export default function Toaster({
  reverseOrder = false,
  gutter = 8,
  colorMode = 'auto',
}: ToasterProps) {
  const insets = useSafeAreaInsets();
  const colorSchema = useColorScheme();
  const {toasts, handlers} = useToaster();
  const {startPause, endPause, updateHeight, calculateOffset} = handlers;
  const _colorMode = useMemo(() => {
    switch (colorMode) {
      case 'dark':
      case 'light':
        return colorMode;
      case 'auto':
      default:
        return colorSchema;
    }
  }, [colorMode, colorSchema]);

  const _insetsStyles = useMemo(() => {
    // 所有邊緣插入gutter
    const result: Pick<ViewStyle, keyof EdgeInsets> = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };

    let key: keyof EdgeInsets;
    for (key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        result[key] = insets[key] + gutter;
      }
    }

    return result;
  }, [gutter, insets]);

  function _renderToast(item: Toast) {
    const _offset = calculateOffset(item, {
      reverseOrder,
      gutter,
    });

    return (
      <ToastItem
        key={item.id}
        toast={item}
        offset={_offset}
        updateHeight={updateHeight}
        startPause={startPause}
        endPause={endPause}
        colorMode={_colorMode}
      />
    );
  }

  return (
    <View
      style={[StyleSheet.absoluteFill, _insetsStyles]}
      pointerEvents="box-none">
      {toasts.map(_renderToast)}
    </View>
  );
}
