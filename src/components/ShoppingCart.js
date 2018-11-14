import LineItem from './LineItem';

class ShoppingCart {
  constructor() {
    this._items = [];
    this._total = 0;
  }

  add(id, title, quantity, price) {
    let li = new LineItem(id, title, quantity, price);
    this._items.push(li)
    this._total = this._total + li.total;
    return this;
  }

  delete(id) {
    let ind = this._items.map((item) => { return item.id; }).indexOf(id);
    let item = this._items[ind];
    this._items.splice(ind, 1);
    this._total = this._total - item.total;
  }

  get items() { return this._items; }
  get total() { return this._total; }
}

export default ShoppingCart;
