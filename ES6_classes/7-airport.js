export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
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

  // Default string description for Symbol tag (e.g. Airport [SFO])
  get [Symbol.toStringTag]() {
    return this._code;
  }

  // Custom toString method (e.g. [object SFO])
  toString() {
    return `[object ${this._code}]`;
  }
}
