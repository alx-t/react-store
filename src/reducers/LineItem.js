export default class LineItem {
  constructor(id, title, quantity, price) {
    this._id = id;
    this._title = title;
    this._quantity = quantity;
    this._price = price;
    this._total = this._price * this._quantity;
  }

  get total() { return this._total; }
  get id() { return this._id; }
  get title() { return this._title; }
  get quantity() { return this._quantity; }
  get price() { return this._price; }
}
