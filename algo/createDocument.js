function generateDocument(characters, document) {
  let arr = characters.split('');
  for (let i = 0; i < document.length; i++) {
    let index = arr.indexOf(document[i]);
    if (index === -1) {
      return false;
    }
    arr.splice(index, 1);
  }
  return true;
}
