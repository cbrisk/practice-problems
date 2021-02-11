function minimumWaitingTime(queries) {
  let totalWait = 0;
  queries.sort((a, b) => a - b);
  let intermediate = queries[0];
  for (let i = 1; i < queries.length; i++) {
    totalWait += intermediate;
    intermediate += queries[i];
  }
  return totalWait;
}
