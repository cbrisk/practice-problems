function findEmailDomain(address) {
  let arr = address.split('@');
  return arr[arr.length - 1];
}
