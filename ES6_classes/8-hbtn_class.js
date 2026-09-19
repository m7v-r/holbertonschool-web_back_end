export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter and Setter for size
  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = val;
  }

  // Getter and Setter for location
  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = val;
  }

  // Primitive casting handler
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
