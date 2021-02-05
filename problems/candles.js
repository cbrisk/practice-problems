function candles(candlesNumber, makeNew) {
  let needed = makeNew;
  let totalCount = candlesNumber;
  while (candlesNumber >= needed) {
    let array = getLeft(candlesNumber, needed);
    candlesNumber = 0;
    totalCount += array[1];
    candlesNumber = array[1] + array[0]
  }
  return totalCount;

  function getLeft(candleLeftOvers, makeNew) {
    let left = candleLeftOvers % makeNew;
    let candles = Math.floor(candleLeftOvers / makeNew);
    return [left, candles];
  }
}
