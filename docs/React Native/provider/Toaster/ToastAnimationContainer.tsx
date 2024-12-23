import Reanimated, {useAnimatedStyle} from 'react-native-reanimated';
import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {positionStyles, toastStyles} from './styles';
import {ToastAnimationContainerProps} from './type';
import {DEFAULT_TOAST_POSITION} from './config';

/** - 吐司動畫物件 */
export default function ToastAnimationContainer({
  visible,
  position = DEFAULT_TOAST_POSITION,
  // 動畫
  translateY,
  opacity,
  scale,
  //
  children,
}: ToastAnimationContainerProps) {
  /** - 是否為在上方 */
  const top = position?.includes('top');
  const factor = top ? 1 : -1;

  /** - 動畫樣式 */
  const style = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      transform: [
        {
          translateY: factor * translateY.value,
        },
        {
          scale: scale.value,
        },
      ],
    }),
    [factor],
  );
  /** - 定位的樣式 */
  const positionStyle = useMemo(
    () => positionStyles[position] ?? positionStyles[DEFAULT_TOAST_POSITION],
    [position],
  );

  return (
    <Reanimated.View
      style={[
        style,
        styles.container,
        positionStyle,
        visible && toastStyles.active,
      ]}>
      {children}
    </Reanimated.View>
  );
}

const styles = StyleSheet.create({
  container: {position: 'absolute'},
});
