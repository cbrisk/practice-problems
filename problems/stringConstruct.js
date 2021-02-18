function stringsConstruction(a, b) {
  let bArr = b.split('');
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    let index = bArr.indexOf(a[i]);
    if (index !== -1) {
      bArr.splice(index, 1);
    } else {
      break;
    }
    if (i === a.length - 1) {
      count++;
      i = -1;
    }
  }
  return count;
}
