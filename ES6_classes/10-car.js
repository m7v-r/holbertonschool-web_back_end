export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Symbol.species getter to return the current class constructor
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car returning a new instance with undefined properties
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
