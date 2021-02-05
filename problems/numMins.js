function lateRide(n) {
  var hour = Math.floor(n / 60);
  var mins = n % 60;
  var num = Math.floor(hour / 10);
  num += hour % 10;
  num += Math.floor(mins / 10);
  num += mins % 10;
  return num;
}
