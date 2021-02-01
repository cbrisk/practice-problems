function lineUp(commands) {
  let previousGrp = 0;
  let previousInd = 0;
  let count = 0;
  for (let i = 0; i < commands.length; i++) {
    previousGrp = calcPos(previousGrp, commands[i]);
    previousInd = calcPosDiff(previousInd, commands[i]);
    if (previousInd === previousGrp) {
      count++;
    }
  }
  function calcPos(position, direction) {
    if (direction === 'L') {
      if (position === 0) {
        return 270;
      } else {
        return position - 90;
      }
    } else if (direction === 'R') {
      if (position === 270) {
        return 0;
      } else {
        return position + 90;
      }
    } else {
      if (position < 180) {
        return position + 180;
      } else if (position === 180) {
        return 0;
      } else {
        return 90;
      }
    }
  }
  function calcPosDiff(position, direction) {
    if (direction === 'R') {
      if (position === 0) {
        return 270;
      } else {
        return position - 90;
      }
    } else if (direction === 'L') {
      if (position === 270) {
        return 0;
      } else {
        return position + 90;
      }
    } else {
      if (position < 180) {
        return position + 180;
      } else if (position === 180) {
        return 0;
      } else {
        return 90;
      }
    }
  }
  return count;
}
