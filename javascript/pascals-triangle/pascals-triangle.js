//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(numRows) {
    this.n = numRows;
    this.result = this.rows;
  }

  get lastRow() {
    return this.result[this.result.length - 1];
  }

  get rows() {
    const triangle = [];
    for (let row = 0; row < this.n; row++) {
      triangle.push([])
      for (let col = 0; col <= row; col++) {
        if (triangle[row - 1] && triangle[row - 1][col - 1] && triangle[row - 1][col]) {
          const prevNum1 = triangle[row - 1][col - 1];
          const prevNum2 = triangle[row - 1][col];
          triangle[row][col] = prevNum1 + prevNum2;
        } else {
          triangle[row][col] = 1;
        }
      }
    }
    return triangle;
  }
}
