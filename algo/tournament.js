function tournamentWinner(competitions, results) {
  let map = new Map();
  let win;
  for (let i = 0; i < competitions.length; i++) {
    if (!map.has(competitions[i][0])) {
      map.set(competitions[i][0], 0)
    }
    if (!map.has(competitions[i][1])) {
      map.set(competitions[i][1], 0)
    }
    let winner = results[i] ? 0 : 1;

    let val = map.get(competitions[i][winner]);
    map.set(competitions[i][winner], val + 1);
  }
  let big = 0;
  for (let [key, value] of map) {
    if (value > big) {
      big = value;
      win = key;
    }
  }
  return win;
}
