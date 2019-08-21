//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rollD6 = () => {
  return Math.floor((Math.random() * 6) + 1);
}

export const abilityModifier = (n) => {
  if (n < 3) {
    throw 'Ability scores must be at least 3';
  }
  if (n > 18) {
    throw 'Ability scores can be at most 18';
  }
  const scores = {3: -4, 4: -3, 5: -3, 6: -2, 7: -2, 8: -1, 9: -1, 10: 0, 11: 0, 12: 1, 13: 1, 14: 2, 15: 2, 16: 3, 17: 3, 18: 4}
  return scores[n];
};

export class Character {
  constructor() {
    this.strStat = Character.rollAbility();
    this.dexStat = Character.rollAbility();
    this.conStat = Character.rollAbility();
    this.intStat = Character.rollAbility();
    this.wisStat = Character.rollAbility();
    this.charStat = Character.rollAbility();
  }

  static rollAbility() {
    const rolls = [rollD6(), rollD6(), rollD6(), rollD6()];
    return rolls.sort().slice(-3).reduce((acc, curRoll) => acc += curRoll);
  }

  get strength() {
    return this.strStat;
  }

  get dexterity() {
    return this.dexStat;
  }

  get constitution() {
    return this.conStat;
  }

  get intelligence() {
    return this.intStat;
  }

  get wisdom() {
    return this.wisStat;
  }

  get charisma() {
    return this.charStat;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.conStat)
  }
}
