function isValidSubsequence(array, sequence) {
  let current = 0
  while (current < sequence.length) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[current]) {
        current++
        if (current === sequence.length) {
          return true
        }
      } else {
        continue;
      }
    }
    return false;
  }
}
