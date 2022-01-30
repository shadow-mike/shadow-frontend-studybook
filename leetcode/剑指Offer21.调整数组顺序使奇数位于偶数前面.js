/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        // 找到左侧第一个偶数
        while (nums[i]%2 === 1) {
            i++;
        }
        // 找到右侧第一个奇数
        while (nums[j]%2 === 0) {
            j--;
        }
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    return nums;
 };