function smallestDifference(arrayOne, arrayTwo) {
  for (let diff = 0; diff < 1000; diff++) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo.indexOf(arrayOne[i] + diff) !== -1) {
        return [arrayOne[i], arrayOne[i] + diff];
      } else if (arrayTwo.indexOf(arrayOne[i] - diff) !== -1) {
        return [arrayOne[i], arrayOne[i] - diff];
      }
    }
  }
}
