import type {ToastIconProps} from './type';

/** - 預設吐司高度 */
export const DEFAULT_TOAST_HEIGHT = 48;

/** - 預設吐司定位 */
export const DEFAULT_TOAST_POSITION = 'top-center';

/** - 圖標尺寸 */
export const ICON_SIZE = 20;

/** - 顏色表 */
export const colors: Record<
  'dark' | 'light',
  Record<ToastIconProps['type'], string>
> = {
  dark: {
    loading: '#00b5ff',
    success: '#00a96e',
    error: '#ff5861',
    custom: 'transparent',
    blank: 'transparent',
  },
  light: {
    loading: '#00b5ff',
    success: '#00a96e',
    error: '#ff5861',
    custom: 'transparent',
    blank: 'transparent',
  },
};
