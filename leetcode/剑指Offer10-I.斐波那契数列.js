/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    return _fib(n);
};
function _fib(n) {
    if (n <= 1) return n;
    let a = 1;
    let b = 1;
    for (let i = n; i > 2; i--) {
        let sum = a + b;
        a = b;
        b = sum % 1000000007;
    }
    return b;
}