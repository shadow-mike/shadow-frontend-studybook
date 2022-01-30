/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let i = 0;
  while (i < s.length) {
    // 数字处理
    if (s[i] >= 0) {
      let num = s[i++];
      while (s[i] >= 0) {
        num += s[i];
        i++;
      }
      stack.push(num);
    }
    // 出栈计算字符串
    if (s[i] === ']') {
      let string = '';
      let cur = stack.pop();
      while (cur !== '[') {
        string = cur + string;
        cur = stack.pop();
      }
      const num = Number(stack.pop());
      stack.push(string.repeat(num));
    } else {
        // [ 或者 字符
      stack.push(s[i]);
    }
    i++;
  }
  return stack.join('');
};
// @lc code=end
