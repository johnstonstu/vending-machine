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

  addCredit(val) {
    if (val > 10) return "failure";
    return { credit: val };
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
