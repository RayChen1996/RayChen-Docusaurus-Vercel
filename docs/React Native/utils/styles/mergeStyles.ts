import {StyleSheet} from 'react-native';
import type {StyleProp, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type MergedStyles = ViewStyle | TextStyle | ImageStyle;

/** - 預設值，避免每次都拿新的物件 */
const initialMergedStyles: MergedStyles = {};

/** - 已創造的物件樣式 */
const cachedStyles = new Map<string, MergedStyles>();

/** - 樣式合併並快取 */
export default function mergeStyles(...styles: StyleProp<MergedStyles>[]) {
  if (styles?.length > 0) {
    /** - 扁平化樣式 */
    const flattenedStyles = StyleSheet.flatten(styles);
    /** - 將樣式字串化當作索引 */
    const styleHash = JSON.stringify(flattenedStyles);
    // 不在表內的就創新的樣式
    if (!cachedStyles.has(styleHash)) {
      cachedStyles.set(styleHash, flattenedStyles);
    }
    // 統一回傳`hash`的樣式
    return cachedStyles.get(styleHash) || initialMergedStyles;
  }
  return initialMergedStyles;
}
