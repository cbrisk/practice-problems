var countMatches = function (items, ruleKey, ruleValue) {
  const keys = ['type', 'color', 'name'];
  const index = keys.indexOf(ruleKey);
  const newItems = items.filter(ele => ele[index] === ruleValue);
  return newItems.length;
};
