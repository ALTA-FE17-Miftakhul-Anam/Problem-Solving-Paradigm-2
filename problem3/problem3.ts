// Problem 3 - Frog
function frog(jumps: number[]): number {
    const n = jumps.length;
    const dp: number[] = new Array(n).fill(0);

    // Basis: Langkah pertama tidak memerlukan biaya
    dp[0] = 0;

    // Basis: Langkah kedua memerlukan biaya untuk loncat dari batu 1 ke batu 2
    dp[1] = Math.abs(jumps[1] - jumps[0]);

    for (let i = 2; i < n; i++) {
        // Setiap langkah, ambil minimum biaya dari dua kemungkinan:
        // 1. Loncat dari batu sebelumnya
        // 2. Loncat dari dua batu sebelumnya
        dp[i] = Math.min(
            dp[i - 1] + Math.abs(jumps[i] - jumps[i - 1]),
            dp[i - 2] + Math.abs(jumps[i] - jumps[i - 2])
        );
    }

    return dp[n - 1];
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40
