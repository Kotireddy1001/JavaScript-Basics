//0/1 Knapsack Problem

const knapsack = (weights, values, W) => {
  const n = weights.length;
  const dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
};

console.log(knapsack([2, 3, 4], [4, 5, 6], 5)); // Output: 9
