class VendingMachine {
  constructor(dataPath) {
    this.data = require(dataPath);
    this.items = this.data.items;
    this.float = this.data.float;
  }

  getAllItems() {
    let res = [];
    this.data.items.forEach(item => {
      res.push(`${item.name}: ${item.stock}`);
    });
    return res;
  }
  getItemsInStock() {
    let res = [];
    this.data.items.forEach(item => {
      if (item.stock > 0) {
        res.push(`${item.name}: ${item.stock}`);
      }
    });
    return res;
  }
  getItemsNotInStock() {
    let res = [];
    this.data.items.forEach(item => {
      if (item.stock === 0) {
        res.push(`${item.name}`);
      }
    });
    return res;
  }
  getItem(name) {
    const res = this.items.find(item => item.name === name);
    if (undefined === res) return "item not found";
    return res;
  }

  buyItem(item, credit) {
    let cur = this.getItem(item);
    if (cur.stock === 0) return "item not in stock";
    if (credit === cur.price) {
      return "success";
    }
    if (credit > cur.price) return ["success", `change: ${credit - cur.price}`];
    if (credit < cur.price)
      return ["fail", `please add: ${cur.price - credit}`];
    // return cur;
  }

  addCredit(val) {
    const values = [0.05, 0.1, 0.25, 1.0, 2.0, 5.0, 10.0];

    // let toal = [];
    // function checkVal(arr) {
    //   return arr < 10 && typeof "number";
    // }

    // if (!val.every(checkVal) || !Array.isArray(val)) {
    //   return "failure";
    // }

    if (val > 10 || typeof val !== "number") return "failure";

    this.data.credit += val;

    return { credit: this.data.credit };
  }

  addStock() {
    this.items.forEach(item => {
      item.stock = item.maxStock;
    });
    return this.items;
  }

  addFloat() {
    this.float.forEach(value => {
      value.stock = value.maxStock;
    });
    return { float: this.float };
  }
}

module.exports = VendingMachine;
