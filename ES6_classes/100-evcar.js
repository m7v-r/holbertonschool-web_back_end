import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override Symbol.species to return Car instead of EVCar for cloning
  static get [Symbol.species]() {
    return Car;
  }
}
