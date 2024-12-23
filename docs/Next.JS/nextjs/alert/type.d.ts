/** - 通知按鈕 */
export interface AlertButton {
  /** - 辨識用`ID` */
  id?: string;
  /** - 按鈕文字 */
  text?: string;
  /** - 按鈕行為 */
  onClick?: () => Promise<void> | void;
  /**
   * - 按鈕類型樣式
   *    - `default`: 預設樣式
   *    - `cancel`: 用於取消時的樣式
   *    - `destructive`: 用於破壞性操作的樣式
   *
   * @default 'cancel'
   */
  style?: "default" | "cancel" | "destructive";
}

/** - 行為按鈕 */
type AlertEventButton = Omit<AlertButton, "id">;

/** - 通知行為參數 */
export interface AlertEventParams {
  /** - 辨識用`ID` */
  id?: string;
  /** - 標題 */
  title?: string;
  /** - 訊息 */
  message?: string;
  /** - 按鈕 */
  buttons?: Array<AlertButton>;
}

/** - 通知行為 */
export interface AlertEvent {
  /** - 提醒 */
  alert: (
    title: AlertEventParams["title"],
    message: AlertEventParams["message"],
    buttons?: Array<AlertEventButton>,
  ) => void;
  /** - 通知 */
  notice: (
    message: AlertEventParams["message"],
    button?: AlertEventButton,
  ) => void;
}
