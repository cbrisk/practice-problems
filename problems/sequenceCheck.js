function launchSequenceChecker(systemNames, stepNumbers) {
  let obj = {};
  for (let i = 0; i < systemNames.length; i++) {
    if (obj[systemNames[i]] === undefined) {
      obj[systemNames[i]] = [stepNumbers[i]];
    } else {
      obj[systemNames[i]].push(stepNumbers[i]);
    }
  }
  for (let key in obj) {
    for (let j = 0; j < obj[key].length - 1; j++) {
      if (obj[key][j] >= obj[key][j + 1]) {
        return false;
      }
    }
  }
  return true;
}
