/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let stack = [],
    prevPos = 0,
    prevFlag = null;
  const records = new Array(n).fill(0);
  for (let i = 0; i < logs.length; i++) {
    const [id, flag, pos] = logs[i].split(':');
    // 逐一分类讨论，start-start, start-end, end-start, end-end
    if (prevFlag === 'start') { 
      if (flag === 'start') {
        records[stack[stack.length - 1]] += pos - prevPos;
        stack.push(id);
      } else {
        // end
        records[stack[stack.length - 1]] += pos - prevPos + 1;
        stack.pop();
      }
    } else if (prevFlag === 'end') {
      if (flag === 'start') {
        if (stack.length) {
          records[stack[stack.length - 1]] += pos - prevPos - 1;
        }
        stack.push(id);
      } else {
        records[id] += pos - prevPos;
        stack.pop();
      }
    } else {
      stack.push(id); // 遇到第一个log情况
    }
    prevFlag = flag;
    prevPos = pos;
  }
  return records;
};
// @lc code=end
