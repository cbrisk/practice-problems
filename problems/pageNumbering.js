function pagesNumberingWithInk(current, numberOfDigits) {
  while (numberOfDigits >= 0) {
    let length = current.toString().length;
    numberOfDigits -= length;
    if (numberOfDigits < length) {
      return current;
    }
    current++;
  }
}
