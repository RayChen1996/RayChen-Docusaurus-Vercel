/** - 時間戳記轉字串格式 */
export default function timestampToTimeString(timestamp: number): string {
  const totalSeconds = Math.floor(timestamp / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  const result = [hours, minutes, seconds];

  return result
    .filter((v, i, a) => {
      const last = a.length - 1 === i;
      return last || v;
    })
    .map(v => v.toString().padStart(2, '0'))
    .join(':');
}
