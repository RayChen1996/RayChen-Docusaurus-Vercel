import {
  type ReanimatedEvent,
  useEvent,
  useHandler,
} from 'react-native-reanimated';
import type {PagerViewOnPageScrollEventData} from 'react-native-pager-view';

type Handlers = {
  onPageScroll: (
    event: ReanimatedEvent<PagerViewOnPageScrollEventData>,
    context: any,
  ) => void;
};

/** - `react-native-pager-view`的滾動事件`hook` */
export default function usePagerScrollHandler(
  handlers: Handlers,
  dependencies?: any[],
) {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);

  return useEvent(
    event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(
          event as ReanimatedEvent<PagerViewOnPageScrollEventData>,
          context,
        );
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
}

const subscribeForEvents = ['onPageScroll'];
