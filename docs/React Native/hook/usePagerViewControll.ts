import {useCallback, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import PagerView, {type PagerViewProps} from 'react-native-pager-view';
import Reanimated, {runOnJS, useSharedValue} from 'react-native-reanimated';

import usePagerScrollHandler from './usePagerScrollHandler';

export interface UsePagerViewControllParams
  extends Pick<PagerViewProps, 'onPageScroll' | 'onPageSelected'> {
  onIndexChange?: (index: number) => void;
}

/** - `PagerView`控制器 */
export default function usePagerViewControll(
  params?: UsePagerViewControllParams,
) {
  const {onPageScroll, onIndexChange, onPageSelected} = {
    ...initialParams,
    ...params,
  };
  const [index, setIndex] = useState(0);
  const offset = useSharedValue(0);
  const ref = useRef<PagerView>(null);
  const propsRef = useRef({onIndexChange, onPageSelected});
  propsRef.current.onIndexChange = onIndexChange;
  propsRef.current.onPageSelected = onPageSelected;

  const _onPageScroll = usePagerScrollHandler({
    onPageScroll: e => {
      'worklet';
      if (onPageScroll) {
        runOnJS(onPageScroll)(e as any);
      }
      offset.value = e.offset + e.position;
    },
  });

  const _onIndexChange = useCallback((newIndex: number) => {
    propsRef.current.onIndexChange?.(newIndex);
    ref.current?.setPage(newIndex);
    setIndex(newIndex);
  }, []);

  const _onPageSelected: NonNullable<PagerViewProps['onPageSelected']> =
    useCallback(event => {
      propsRef.current.onPageSelected?.(event);
      setIndex(event.nativeEvent.position);
    }, []);

  return {
    index,
    ref,
    offset,
    style: styles.container,
    onPageScroll: _onPageScroll,
    onIndexChange: _onIndexChange,
    onPageSelected: _onPageSelected,
  };
}

function emptyEvent() {}

const initialParams: UsePagerViewControllParams = {
  onPageScroll: emptyEvent,
  onIndexChange: emptyEvent,
  onPageSelected: emptyEvent,
};

/** - 動畫版`PagerView` */
export const AnimatedPagerView = Reanimated.createAnimatedComponent(PagerView);

const styles = StyleSheet.create({
  container: {flex: 1},
});
