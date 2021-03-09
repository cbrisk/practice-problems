function minimalNumberOfCoins(coins, price) {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    count += Math.floor(price / coins[i]);
    price = price % coins[i];
    if (price === 0) {
      break;
    }
  }
  return count;
}
