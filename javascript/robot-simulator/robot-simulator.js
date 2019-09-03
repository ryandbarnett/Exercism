//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}

export class Robot {
  constructor() {
    this.directions = ['north', 'east', 'south', 'west'];
    this.x = 0;
    this.y = 0;
  }

  orient(direction) {
    if(!this.directions.includes(direction)) throw new InvalidInputError;
    this.direction = direction;
  }

  get bearing() {
    return this.direction;
  }

  get coordinates() {
    const {x, y} = this;
    return [x, y];
  }

  turnRight() {
    const {direction, directions} = this;
    this.direction = directions[(directions.indexOf(direction) + 1) % 4]
  }

  turnLeft() {
    const {direction, directions} = this;
    const newIndex = directions.indexOf(direction) - 1;
    if (newIndex < 0) {
      this.direction = directions[3];
    } else {
      this.direction = directions[newIndex]
    }

  }

  at(x, y) {
    this.x = x;
    this.y = y;
  }

  advance() {
    const {direction} = this;
    switch(direction) {
      case 'north':
        this.y++;
        break;
      case 'east':
        this.x++;
        break;
      case 'south':
        this.y--;
        break;
      case 'west':
        this.x--;
        break;
    }
  }

  static instructions(chars) {
    return chars.split('').map(char => {
      switch (char) {
        case 'R':
          return 'turnRight';
        case 'L':
          return 'turnLeft';
        case 'A':
          return 'advance';
      }
    });
  }

  place(startingPosition) {
    const {x, y, direction} = startingPosition;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  evaluate(chars) {
    const instructions = Robot.instructions(chars);
    instructions.forEach(instruction => {
      this[instruction]();
    })
  }
}
