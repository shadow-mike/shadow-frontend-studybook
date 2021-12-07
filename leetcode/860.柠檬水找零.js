/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (!bills.length) return false;
  const tickets = {
    5: 0,
    10: 0,
    20: 0,
  };
  for (let i = 0; i < bills.length; i++) {
    const t = bills[i];
    tickets[t]++;
    const recharge = t - 5;
    // 分类讨论
    if (recharge === 0) continue;
    if (recharge === 5 && --tickets[recharge] < 0) {
      return false;
    }
    if (recharge === 15) {
      // 优先找零10元
      if (tickets[10] && tickets[5]) {
        tickets[10]--;
        tickets[5]--;
      } else if (tickets[5] >= 3) {
        tickets[5] -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
