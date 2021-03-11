function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  let arr = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    arr.push(ride_time * cost_per_minute[i] + ride_distance * cost_per_mile[i]);
  }
  return arr;
}
