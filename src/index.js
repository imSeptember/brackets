module.exports = function check(str, bracketsConfig) {
   const stack = [];

  for (let char of str) {
    let isOpeningBracket = false;
    let matchingBracket = null;

    for (let pair of brackets) {
      if (char === pair[0]) {
        isOpeningBracket = true;
        matchingBracket = pair[1];
        break;
      } else if (char === pair[1]) {
        matchingBracket = pair[0];
        break;
      }
    }

    if (isOpeningBracket) {
      stack.push(matchingBracket);
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
