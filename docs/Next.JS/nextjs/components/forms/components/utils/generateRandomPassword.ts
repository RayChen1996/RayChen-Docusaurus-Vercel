import { randomInt, shuffle } from "es-toolkit";

/** - 大寫字母 */
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
/** - 小寫字母 */
const lowercase = "abcdefghijklmnopqrstuvwxyz";
/** - 整數 */
const digits = "0123456789";
/** - 最少8碼 */
const minLength = 8;
/** - 範本 */
const templates = [uppercase, lowercase, digits];

function generatePart(params: string) {
  return params[randomInt(0, params.length)];
}

/** - 生成隨機密碼 */
export default function generateRandomPassword() {
  const result: string[] = [];

  // 確保至少包含一個大寫字母、一個小寫字母和一個數字
  for (const template of templates) {
    result.push(generatePart(template));
  }

  while (result.length < minLength) {
    result.push(generatePart(templates[randomInt(0, templates.length)]));
  }

  return shuffle(result).join("");
}
