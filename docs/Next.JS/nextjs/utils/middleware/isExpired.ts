import { isAfter } from "date-fns";

/** - cookie是否過期 */
export default function isExpired(expires?: Date) {
  return expires ? isAfter(new Date(), expires) : false;
}
