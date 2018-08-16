class VendingMachine {
  constructor(dataPath) {
    this.data = require(dataPath);
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
}

module.exports = VendingMachine;
