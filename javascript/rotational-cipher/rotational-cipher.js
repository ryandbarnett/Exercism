//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(chars, num) {
    return chars.split('').map((char, index) => {
      return String.fromCharCode(chars.charCodeAt(index) + num);
    }).join('');
  }
}
