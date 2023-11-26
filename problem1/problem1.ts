// problem 1 - Fibonacci number top-down
function fiboTopDown(n: number, memo: number[] = []): number {
    if (n <= 1) {
        return n;
    }

    if (typeof memo[n] !== 'undefined') {
        return memo[n];
    }

    memo[n] = fiboTopDown(n - 1, memo) + fiboTopDown(n - 2, memo);
    return memo[n];
}

console.log(fiboTopDown(8)); // 21
console.log(fiboTopDown(1)); // 1
console.log(fiboTopDown(2)); // 1
console.log(fiboTopDown(3)); // 2
console.log(fiboTopDown(5)); // 5
console.log(fiboTopDown(6)); // 8
console.log(fiboTopDown(7)); // 13
console.log(fiboTopDown(9)); // 34
console.log(fiboTopDown(10)); // 55
