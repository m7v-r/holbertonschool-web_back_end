export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = val;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  // Method to display full currency details
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
