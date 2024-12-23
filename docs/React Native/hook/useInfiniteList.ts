import {NetworkStatus} from '@apollo/client';
import {useRef} from 'react';
import {type FlatListProps} from 'react-native';

interface InfiniteListOptions extends Partial<UseInfiniteListReturn> {
  /** - 禁用執行 */
  disabled?: boolean;
  /** - apollo網路狀態 */
  networkStatus?: NetworkStatus;
  /**
   * - 資料偏移量
   * > 例如： `data?.partners?.length`
   * */
  offset?: number;
}

interface UseInfiniteListReturn
  extends Required<
    Pick<FlatListProps<any>, 'onEndReached' | 'onMomentumScrollBegin'>
  > {
  /** - 滾到最下方時執行函式 */
  onEndReached: (info?: {distanceFromEnd: number}) => void;
}

/** - 無限滾動列表功能hook */
export default function useInfiniteList(
  /** - 要執行的函式 */
  callback?: UseInfiniteListReturn['onEndReached'],
  options?: InfiniteListOptions,
): UseInfiniteListReturn {
  const {disabled, networkStatus, offset} = {...initalOptions, ...options};
  const _disabled =
    disabled || networkStatusToDisabled(networkStatus) || !offset;
  const eventRef = useRef({
    callback,
    onEndReached: options?.onEndReached,
    onMomentumScrollBegin: options?.onMomentumScrollBegin,
  });
  eventRef.current.callback = _disabled ? undefined : callback;
  eventRef.current.onEndReached = options?.onEndReached;
  eventRef.current.onMomentumScrollBegin = options?.onMomentumScrollBegin;
  /** - 是否執行callback */
  const action = useRef(false);

  const eventParams = useRef<UseInfiniteListReturn>({
    onEndReached: info => {
      eventRef.current.onEndReached?.(info);
      if (action.current) {
        eventRef.current.callback?.(info);
        action.current = false;
      }
    },
    onMomentumScrollBegin(params) {
      action.current = true;
      eventRef.current.onMomentumScrollBegin?.(params);
    },
  });

  return eventParams.current;
}

/** - 要檢查的狀態 */
const checkStatus = [
  NetworkStatus.loading,
  NetworkStatus.refetch,
  NetworkStatus.fetchMore,
];

/** - 檢查網路狀態確認禁用 */
function networkStatusToDisabled(networkStatus?: NetworkStatus) {
  if (!networkStatus) {
    return false;
  }
  return checkStatus.includes(networkStatus);
}

/** - 預設選項 */
const initalOptions: InfiniteListOptions = {
  disabled: false,
  networkStatus: NetworkStatus.ready,
  offset: undefined,
};
