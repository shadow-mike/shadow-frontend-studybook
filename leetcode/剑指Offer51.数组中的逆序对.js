/**
 * @param {number[]} nums
 * @return {number}
 */
 var reversePairs = function(nums) {
    if (nums.length <= 1) return 0;
    const tmp = new Array(nums.length);
    const cp = [...nums];
    return calc(cp, 0, nums.length - 1, tmp);
};

function calc(nums, left, right, tmp) {
    if (left === right) return 0;
    const mid = (right + left) >>> 1;
    console.log(mid)
    const leftCount = calc(nums, left, mid, tmp);
    const rightCount = calc(nums, mid + 1, right, tmp);
    if (nums[mid] <= nums[mid + 1]) return leftCount + rightCount;
    const mergeCount = merge_Count(nums, left, mid, right, tmp);
    return leftCount + rightCount + mergeCount;
}
function merge_Count(nums, left, mid, right, tmp) {
    for (let k = left; k <= right; k++) {
        tmp[k] = nums[k];
    }
    let i = left;
    let j = mid + 1;
    let count = 0;
    for (let k = left; k <= right; k++) {
        if (i === mid + 1) {
            nums[k] = tmp[j];
            j++;
        } else if (j === right + 1) {
            nums[k] = tmp[i];
            i++;
        } else if (tmp[i] <= tmp[j]) {
            nums[k] = tmp[i];
            i++;
        } else {
            nums[k] = tmp[j];
            j++;
            count += (mid - i + 1);
        }
    }
    return count;
}