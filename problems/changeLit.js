function switchLights(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]) {
      changeLit(a, i);
    }
  }
  return a;
  function changeLit(arr, index) {
    for (let i = 0; i <= index; i++) {
      arr[i] = arr[i] ? 0 : 1;
    }
  }
}
