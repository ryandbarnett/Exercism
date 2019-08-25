//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const matchingBrackets = (brackets) => {
  const reverse = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  const wrongOrder = ['}', ')', ']']
  
  if (brackets.length === 0) return true;
  if (wrongOrder.includes(brackets[0])) return false;
  const isMatch = brackets.indexOf(reverse[brackets[0]]);
  if (isMatch !== -1 && isMatch % 2 === 1) {
    brackets = brackets.split('').splice(isMatch, 1).splice(1);
    return matchingBrackets(brackets)
  } else {
    return false;
  }
};
