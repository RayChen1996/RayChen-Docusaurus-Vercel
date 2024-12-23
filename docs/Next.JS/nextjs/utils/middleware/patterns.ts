/** - 路徑配對清單 */
const patterns = {
  /** - 未登入時不能進入的路徑 */
  protected: ["/company", "/company/(.*)", "/account"],
  /** - 已登入後不能進入的路徑 */
  restricted: ["/sign-in", "/sign-up"],
};

export default patterns;
