import {StyleSheet} from 'react-native';
import type {ViewStyle, ImageStyle, StyleProp, TextStyle} from 'react-native';

/** - 樣式參數 */
type StyleParams = ViewStyle | ImageStyle | TextStyle;
/** - 樣式參數屬性 */
type StyleParamKeys = keyof StyleParams;
/** - 分離類型 */
type SeparatorType =
  | 'borderRadius'
  | 'borderColor'
  | 'padding'
  | 'margin'
  | 'shadow';
/** - 傳入的樣式 */
type SeparateStyleStyles = StyleProp<ViewStyle | ImageStyle | TextStyle>;
/** - 傳入的選項 */
interface SeparateStyleOptions {
  /**
   * - 指定的切割類型
   *    - `borderRadius`: 圓角
   *    - `borderColor`: 框線顏色
   *    - `padding`: 內距
   *    - `margin`: 外距
   *    - `shadow`: 陰影
   * */
  separator?: SeparatorType[];
  /** - 自定義的切割項目 */
  custom?: StyleParamKeys[];
}

/** - 預設樣式 */
const initialStyles: StyleParams = {};
/** - 預設回傳 */
const initialResult = [initialStyles, initialStyles];
/** - 已創造的物件樣式 */
const cachedStyles = new Map<string, StyleParams[]>();

/**
 * - 分離指定樣式
 *
 * @returns `[符合的樣式, 不符合的樣式]`
 */
export default function separateStyles(
  /** - 傳入的樣式 */
  styles: SeparateStyleStyles,
  options?: SeparateStyleOptions,
) {
  /** - 處理結果 */
  let result = initialResult;

  // 沒有傳入樣式回傳預設值
  if (!styles) {
    return result;
  }

  // 沒有給設定等同不做處理
  if (styles && checkOptions(options)) {
    /** - 扁平化樣式 */
    const flattenedStyles = StyleSheet.flatten(styles);
    /** - 將樣式字串化當作索引 */
    const styleHash =
      JSON.stringify(flattenedStyles) + '&' + JSON.stringify(options);
    // 不在表內的就創新的樣式
    if (!cachedStyles.has(styleHash)) {
      const {separator, custom} = options as SeparateStyleOptions;
      /** - 符合的樣式 */
      let matchedStyles: StyleParams = {};
      /** - 不符合的樣式 */
      let unmatchedStyles: StyleParams = {};
      // 處理已定義的切割
      if (separator) {
        for (const iterator of separator) {
          if (iterator in separatorKeyMap) {
            const [matched, unmatched] = separateByKeys(
              flattenedStyles,
              separatorKeyMap[iterator] as unknown as StyleParamKeys[],
            );
            matchedStyles = {...matchedStyles, ...matched};
            unmatchedStyles = {...unmatchedStyles, ...unmatched};
          }
        }
      }
      // 處理自定義的切割
      if (custom) {
        const [matched, unmatched] = separateByKeys(flattenedStyles, custom);
        matchedStyles = {...matchedStyles, ...matched};
        unmatchedStyles = {...unmatchedStyles, ...unmatched};
      }
      // 寫入快取
      cachedStyles.set(
        styleHash,
        // 回傳判斷物件是否有被寫入，否則回傳預設值
        [matchedStyles, unmatchedStyles].map(item =>
          Object.keys(item).length > 0 ? item : initialStyles,
        ),
      );
    }

    result = cachedStyles.get(styleHash) || initialResult;
  }

  return result;
}

/** - 檢查選項是否合法 */
function checkOptions(options?: SeparateStyleOptions) {
  if (options && typeof options === 'object' && !Array.isArray(options)) {
    const validKeys: Array<keyof SeparateStyleOptions> = [
      'custom',
      'separator',
    ];
    return validKeys.some(key => key in options);
  }
  return false;
}

/** - 分離器 */
function separateByKeys<S extends StyleParams, K extends StyleParamKeys>(
  styles: S,
  keys: K[],
) {
  const matched = {} as Pick<S, K>;
  const unmatched = {} as Pick<S, K>;
  for (const iterator of keys) {
    (iterator in styles ? matched : unmatched)[iterator] = styles[iterator];
  }
  return [matched, unmatched];
}

/** - 已定義的分隔`keys` */
const separatorKeyMap = {
  /** - 圓角屬性 */
  borderRadius: [
    'borderRadius',
    'borderBottomEndRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomStartRadius',
    'borderTopEndRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopStartRadius',
    'borderStartStartRadius',
    'borderStartEndRadius',
    'borderEndStartRadius',
    'borderEndEndRadius',
  ],
  /** - 框線顏色屬性 */
  borderColor: [
    'borderColor',
    'borderTopColor',
    'borderLeftColor',
    'borderRightColor',
    'borderBottomColor',
    'borderBlockStartColor',
    'borderBlockEndColor',
    'borderBlockColor',
    'borderEndColor',
    'borderStartColor',
  ],
  /** - 外距屬性 */
  margin: [
    'margin',
    'marginBottom',
    'marginEnd',
    'marginHorizontal',
    'marginLeft',
    'marginRight',
    'marginStart',
    'marginTop',
    'marginVertical',
  ],
  /** - 內距屬性 */
  padding: [
    'padding',
    'paddingBottom',
    'paddingEnd',
    'paddingHorizontal',
    'paddingLeft',
    'paddingRight',
    'paddingStart',
    'paddingTop',
    'paddingVertical',
  ],
  /** - 陰影屬性 */
  shadow: ['shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius'],
} as const;
