const _separate = ",";

const _sizes = [
  // 2xl
  "(min-width: 1536px) ",
  // xl
  "(min-width: 1280px) ",
  // lg
  "(min-width: 1024px) ",
  // md
  "(min-width: 768px) ",
  // sm
  "(min-width: 640px) ",
  // other
  "",
];

function _combine(item: string, index: number) {
  return _sizes[index] + item;
}

/**
 * - 用於grid容器尺寸
 *    - `sm`: `1/2 (50vw)`螢幕寬度
 *    - `md`: `1/2 (50vw)`螢幕寬度
 *    - `lg`: `1/3 (33vw)`螢幕寬度
 *    - `xl`: `1/4 (25vw)`螢幕寬度
 *    - `2xl`: `1/5 (20vw)`螢幕寬度
 *    - `other`: 其餘螢幕全寬
 * */
export const gridSizes = [
  // 2xl
  "20vw",
  // xl
  "25vw",
  // lg
  "33vw",
  // md
  "50vw",
  // sm
  "50vw",
  "100vw",
]
  .map(_combine)
  .join(_separate);

/** - 用於css容器尺寸 */
export const containerSizes = [
  // 2xl
  "1536px",
  // xl
  "1280px",
  // lg
  "1024px",
  // md
  "768px",
  // sm
  "640px",
  "100vw",
]
  .map(_combine)
  .join(_separate);
