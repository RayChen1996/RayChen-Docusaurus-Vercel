import React from 'react';
import {StyleSheet} from 'react-native';
import {CircleCheckIcon, CircleXIcon} from 'lucide-react-native';
import Reanimated, {
  type ComplexAnimationBuilder,
  Easing,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';

import type {ToastIconProps, ToastAnimationLayoutTiming} from './type';
import {ICON_SIZE, colors} from './config';

import LoadingIcon from './LoadingIcon';

/** - 圖標佈局動畫設定檔 */
const animatedIconLayout: Record<
  ToastAnimationLayoutTiming,
  ComplexAnimationBuilder
> = {
  entering: ZoomIn.delay(120)
    .duration(300)
    .easing(Easing.bezierFn(0.175, 0.885, 0.32, 1.275)),
  exiting: ZoomOut.duration(300).easing(Easing.linear),
};

export default function ToastIcon({type, colorMode = 'light'}: ToastIconProps) {
  const _color =
    typeof colorMode === 'string' && colorMode in colors
      ? colors[colorMode]
      : colors.light;

  return (
    <Reanimated.View
      {...animatedIconLayout}
      key={type}
      style={styles.container}>
      {_renderIcon(type, _color)}
    </Reanimated.View>
  );
}

/** - 渲染圖標 */
function _renderIcon(
  type: ToastIconProps['type'],
  color: Record<ToastIconProps['type'], string>,
) {
  switch (type) {
    case 'loading':
      return <LoadingIcon size={ICON_SIZE} color={color.loading} />;
    case 'success':
      return <CircleCheckIcon size={ICON_SIZE} color={color.success} />;
    case 'error':
      return <CircleXIcon size={ICON_SIZE} color={color.error} />;
    case 'custom':
    case 'blank':
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
  },
});
