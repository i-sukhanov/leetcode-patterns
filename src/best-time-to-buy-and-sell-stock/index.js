/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let currentMin = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    maxProfit = Math.max(maxProfit, price - currentMin);
    currentMin = Math.min(currentMin, price);
  }

  return maxProfit;
};
