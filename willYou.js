function willYou(young, beautiful, loved) {
  if ((young && beautiful && loved) || ((!young || !beautiful) && !loved)) {
    return false;
  }
  return true;
}
