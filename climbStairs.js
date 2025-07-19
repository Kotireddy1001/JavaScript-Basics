const climbStairs = (n, memo = {}) => {
  if (n <= 1) return 1;
  if (n in memo) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};
//You can take 1 or 2 steps. How many ways to reach the top?

console.log(climbStairs(5)); // Output: 8
