function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < statues.length; i++) {
    while (statues[i + 1] - statues[i] > 1) {
      statues[i]++;
      count++;
    }
  }
  return count;
}
