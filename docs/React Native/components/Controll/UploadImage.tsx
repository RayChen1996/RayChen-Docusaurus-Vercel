import React from 'react';
import type {Asset, ImageLibraryOptions} from 'react-native-image-picker';

import imagePicker from '@/utils/imagePicker';

interface RenderCallback {
  /**
   * - 開啟圖片選取
   *
   * @example
   *
   * ```
   * <Pressable onPress={handlePicker(function)} />
   * ```
   * */
  handlePicker: (
    callback?: ((cb: Asset[]) => Promise<void>) | undefined,
  ) => () => Promise<void>;
}

export interface UploadImageProps {
  render?: (cb: RenderCallback) => JSX.Element;
  /** - 照片選項 */
  options?: Partial<ImageLibraryOptions>;
}

/** - 上傳圖片組件 */
export default function UploadImage({render, options}: UploadImageProps) {
  function handlePicker(callback?: (cb: Asset[]) => Promise<void>) {
    return async () => {
      const result = await imagePicker('IMAGE_LIBRARY', options);
      if (result.success) {
        return await callback?.(result.assets);
      }
    };
  }
  return <>{render?.({handlePicker})}</>;
}
