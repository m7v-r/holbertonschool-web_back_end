export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Getter and Setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = val;
  }

  // Abstract method placeholder
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
