/**
 * @param {number[]} array
 * @return {number[]}
 */
 var subSort = function (array) {
    let l = r = -1;
    let max = Number.MIN_SAFE_INTEGER;
    // 左往右遍历，记录max右侧比max小的值
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            max = array[i];
        } else {
            r = i;
        }
    }
    // 右往左遍历，记录min左侧比min大的值
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] <= min) {
            min = array[i];
        } else {
            l = i;
        }
    }
    return [l, r];
};