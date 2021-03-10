function timedReading(maxLength, text) {
  let arr = text.split(/[^a-zA-Z]/);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].length;
    if (length > 0 && length <= maxLength) {
      count++;
    }
  }
  return count;
}
