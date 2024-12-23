import {LayoutChangeEvent, Pressable, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {
  Easing,
  type WithTimingConfig,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {resolveValue} from 'react-hot-toast/headless';

import type {ToastAnimationTiming, ToastProps} from './type';
import {darkStyles, lightStyles, toastStyles} from './styles';
import {DEFAULT_TOAST_HEIGHT} from './config';

import ToastIcon from './ToastIcon';
import ToastAnimationContainer from './ToastAnimationContainer';

/** - 吐司物件 */
export default function Toast({
  toast,
  updateHeight,
  endPause,
  startPause,
  offset,
  colorMode,
}: ToastProps) {
  const toastHeight = toast?.height || DEFAULT_TOAST_HEIGHT;

  const translateY = useSharedValue(offset);
  const opacity = useSharedValue(animationParams.exit.opacity);
  const scale = useSharedValue(animationParams.exit.scale);

  const colorStyles = useMemo(
    () => (colorMode === 'dark' ? darkStyles : lightStyles),
    [colorMode],
  );

  useEffect(() => {
    const timingConfig = animatedConfig[toast.visible ? 'enter' : 'exit'];

    translateY.value = withTiming(
      offset * (toast.visible ? 1 : -1),
      timingConfig,
    );
    scale.value = withTiming(
      animationParams[toast.visible ? 'enter' : 'exit'].scale,
      timingConfig,
    );
    opacity.value = withTiming(
      animationParams[toast.visible ? 'enter' : 'exit'].opacity,
      timingConfig,
    );
  }, [toast.visible, offset, translateY, opacity, scale]);

  const _onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      updateHeight(toast.id, event.nativeEvent.layout.height);
    },
    [toast.id, updateHeight],
  );

  return (
    <ToastAnimationContainer
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      visible={toast.visible}
      position={toast.position}>
      <Pressable onPressIn={startPause} onPressOut={endPause}>
        <View
          onLayout={_onLayout}
          style={[
            toastStyles.container,
            toastStyles.shadow,
            colorStyles.toast_container,
            {height: toastHeight},
          ]}>
          {toast.type === 'custom' ? (
            toast.icon
          ) : (
            <ToastIcon type={toast.type} colorMode={colorMode} />
          )}
          <Text style={[toastStyles.text, colorStyles.toast_text]}>
            {resolveValue(toast.message, toast)}
          </Text>
        </View>
      </Pressable>
    </ToastAnimationContainer>
  );
}

/** - 動畫設定檔 */
const animatedConfig: Record<ToastAnimationTiming, WithTimingConfig> = {
  enter: {
    duration: 350,
    easing: Easing.bezier(0.21, 1.02, 0.73, 1),
  },
  exit: {
    duration: 400,
    easing: Easing.bezier(0.06, 0.71, 0.55, 1),
  },
};

/** - 動畫參數 */
const animationParams: Record<
  ToastAnimationTiming,
  Record<'scale' | 'opacity', number>
> = {
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.6,
    opacity: 0,
  },
};
