//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(chars, num) {
    return chars.split('').map((char, index) => {
      return rotateCharacter(char, num);
    }).join('');
  }
}

const rotateCharacter = (char, num) => {
  const oldCode = char.charCodeAt(0);
  const newCode = oldCode + num;
  const isCapital = oldCode >= 65 && oldCode <= 90;
  const isLower = oldCode >= 97 && oldCode <= 122;
  
  if (!isCapital && !isLower) {
    return char;
  }

  if (isCapital && newCode > 90) {
    return parseCode(65 + newCode % 91);
  }

  if (isLower && newCode > 122) {
    return parseCode(97 + newCode % 123);
  }

  return parseCode(char.charCodeAt(0) + num);
}

const parseCode = (num) => {
  return String.fromCharCode(num);
}
