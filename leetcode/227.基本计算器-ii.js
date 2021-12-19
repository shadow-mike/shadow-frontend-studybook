/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let i = 0;
  const stack = [];
  let operate = '+';
  let num = 0;
  while (i < s.length) {
    if (Number(s[i])>= 0 && s[i] !== ' ') {
      num = num * 10 + Number(s[i]);
    } 
    if (isNaN(Number(s[i])) ||
     i === s.length - 1 // 针对最后一位num
     ) {
      switch (operate) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push((stack.pop() / num) | 0); // 按位运算会舍去小数
          break;
        default:
          break;
      }
      operate = s[i];
      num = 0;
    }
    i++;
  }
  console.log(stack.toString());
  let result = 0;
  while (stack.length) {
    result += stack.pop();
  }
  return result;
};
// @lc code=end
