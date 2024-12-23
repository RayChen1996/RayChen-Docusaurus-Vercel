import type { AlertEvent } from "./type";
import useAlertStore from "./useAlertStore";

const alert: AlertEvent["alert"] = (...params) => {
  useAlertStore.getState().alert(...params);
};

const notice: AlertEvent["notice"] = (...params) => {
  useAlertStore.getState().notice(...params);
};

const events = {
  /** - 一般通知 */
  alert,
  /** - 簡易通知 */
  notice,
};

export default events;
