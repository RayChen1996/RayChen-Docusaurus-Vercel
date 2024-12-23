import {LoaderCircleIcon, type LucideProps} from 'lucide-react-native';
import React, {useEffect} from 'react';
import Reanimated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

/** - 載入狀態的icon */
export default function LoadingIcon(props: LucideProps) {
  const rotateValue = useSharedValue(0);
  const style = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate: rotateValue.value + 'deg',
        },
      ],
    }),
    [],
  );

  useEffect(() => {
    rotateValue.value = withRepeat(
      withTiming(360, {easing: Easing.linear, duration: 1000}),
      -1,
    );
  }, [rotateValue]);

  return (
    <Reanimated.View style={style}>
      <LoaderCircleIcon {...props} />
    </Reanimated.View>
  );
}
