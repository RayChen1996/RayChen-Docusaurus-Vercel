import type {ViewProps, ColorSchemeName} from 'react-native';
import type {Toast, ToastPosition, ToastType} from 'react-hot-toast/headless';
import type {ReactNode} from 'react';
import type {SharedValue} from 'react-native-reanimated';

export type ColorMode = ColorSchemeName | 'auto';

export interface ToasterProps {
  position?: ToastPosition;
  containerStyle?: ViewProps['style'];
  /**
   * - 更改每個 toast 之間的間隙。
   * @default 8
   */
  gutter?: number;
  /** - 預設情況下，toast在頂部產生。如果您希望最後有新的toast，請設定為 `true`。 */
  reverseOrder?: boolean;
  /**
   * - 吐司顏色模式，預設跟隨系統
   *
   * @default 'auto'
   * */
  colorMode?: ColorMode;
}

export interface ToastProps {
  updateHeight: (toastId: string, height: number) => void;
  offset: number;
  toast: Toast;
  startPause: () => void;
  endPause: () => void;
  colorMode: ColorSchemeName;
}

export interface ToastIconProps {
  type: ToastType;
  colorMode: ColorSchemeName;
}

export interface ToastAnimationContainerProps {
  position?: ToastPosition;
  visible: boolean;
  children: ReactNode;
  // 動畫
  translateY: SharedValue<number>;
  opacity: SharedValue<number>;
  scale: SharedValue<number>;
}

/** - 動畫時機 */
export type ToastAnimationTiming = 'enter' | 'exit';

/** - 佈局動畫時機 */
export type ToastAnimationLayoutTiming = 'entering' | 'exiting';
