import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = val;
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
