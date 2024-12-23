export interface UsePaginationProps {
  /**
   * 開頭和結尾始終可見的頁數。
   * @default 1
   */
  boundaryCount?: number;
  /**
   * 總頁數。
   * @default 1
   */
  count?: number;
  /**
   * 如果 `true`，則禁用組件.
   * @default false
   */
  disabled?: boolean;
  /**
   * 如果 `true`，則隱藏下一頁按鈕。
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * 如果 `true`，則隱藏上一頁按鈕。
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * 頁面更改時觸發的回調。
   *
   * @param {React.ChangeEvent<unknown>} event 回調的事件源。
   * @param {number} page 所選頁面。
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /**
   * 當前頁面。
   */
  page?: number;
  /**
   * 如果 `true`，則顯示首頁按鈕。
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * 如果 `true`，則顯示最後一頁按鈕。
   * @default false
   */
  showLastButton?: boolean;
  /**
   * 當前頁前後始終可見的頁數。
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: React.ReactEventHandler;
  type: UsePaginationItemType;
  page: number | null;
  selected: boolean;
  disabled: boolean;
}

export type UsePaginationItemType =
  | "page"
  | "first"
  | "last"
  | "next"
  | "previous"
  | "start-ellipsis"
  | "end-ellipsis";

export interface UsePaginationResult {
  items: UsePaginationItem[];
}

const initialProps: Required<UsePaginationProps> = {
  boundaryCount: 1,
  count: 1,
  page: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  onChange: () => {},
};

export default function usePagination(
  props: UsePaginationProps,
): UsePaginationResult {
  const {
    boundaryCount,
    count,
    disabled,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    showFirstButton,
    showLastButton,
    siblingCount,
    ...other
  } = { ...initialProps, ...props };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count,
  );

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    count - boundaryCount - 1,
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ["first"] : []),
    ...(hidePrevButton ? [] : ["previous"]),
    ...startPages,

    // Start ellipsis
    ...(siblingsStart > boundaryCount + 2
      ? ["start-ellipsis"]
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    ...(siblingsEnd < count - boundaryCount - 1
      ? ["end-ellipsis"]
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...(hideNextButton ? [] : ["next"]),
    ...(showLastButton ? ["last"] : []),
  ] as Array<UsePaginationItemType | number>;

  // Map the button type to its page number
  function buttonPage(type: UsePaginationItemType) {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  }

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item): UsePaginationItem => {
    if (typeof item === "number") {
      return {
        onClick: (event) => {
          onChange?.(event, item);
        },
        type: "page",
        page: item,
        selected: item === page,
        disabled,
      };
    } else {
      const _page = buttonPage(item);
      return {
        onClick: (event) => {
          if (typeof _page === "number") {
            onChange?.(event, _page);
          }
        },
        type: item,
        page: _page,
        selected: false,
        disabled: disabled || (disabledItem(item) ? page >= count : page <= 1),
      };
    }
  });

  return {
    items,
    ...other,
  };
}

/** - 要禁用按鈕的類型 */
const disabledItemType: UsePaginationItemType[] = ["next", "last"];

/** - 禁用按鈕類型判斷 */
function disabledItem(type: UsePaginationItemType) {
  return (
    !type.includes("ellipsis") &&
    disabledItemType.some((itemType) => type === itemType)
  );
}

// https://dev.to/namirsab/comment/2050
function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}
