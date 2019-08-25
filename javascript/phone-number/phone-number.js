//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class PhoneNumber {
  constructor(input) {
    this.input = input;
  }

  number() {
    const cleaned = this.input.replace(/\W+/g,'');
    if (/\D/.test(cleaned)) return null;
    let regex = /0|1/;
    if (cleaned.length === 11 && cleaned[0] === '1') {
      if (regex.test(cleaned[1]) || regex.test(cleaned[4])) return null;
      return cleaned.slice(1);
    } else if (cleaned.length === 10) {
      if (regex.test(cleaned[0]) || regex.test(cleaned[3])) return null;
      return cleaned;
    } else {
      return null;
    }
  }
}
