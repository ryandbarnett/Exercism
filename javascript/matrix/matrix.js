//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(input) {
    this.input = input
  }

  convertToRows() {
    let rows = this.input.split('\n').map(row => row.split(' '));
    return rows.map(row => row.map(string => parseInt(string)));
  }

  convertToColumns(rows) {
    return rows.reduce((columns, row) => {
      row.forEach((num, index) => {
        if(!columns[index]) {
          columns[index] = [];
        }
        columns[index].push(num);
      })
      return columns;
    }, []);
  }

  get rows() {
    return this.convertToRows();
  }

  get columns() {
    const rows = this.convertToRows();
    return this.convertToColumns(rows);
  }
}
