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

  getChange(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        let left = amount - coins[0];
        return [coins[0]].concat(this.getChange(left, coins));
      } else {
        coins.shift();
        return this.getChange(amount, coins);
      }
    }
  }

  getCoins(arr) {
    let coins = [2, 1, 0.25];
    let change = {
      toonies: 0,
      loonies: 0,
      quarters: 0
    };
    // let res = this.getChange(arr, coins);

    arr.filter(coin => {
      if (coin === 2) {
        change.toonies = change.toonies + 1;
        this.float[0].stock = this.float[0].stock - 1;
      }
      if (coin === 1) {
        change.loonies = change.loonies + 1;
        this.float[1].stock = this.float[1].stock - 1;
      }
      if (coin === 0.25) {
        {
          change.quarters = change.quarters + 1;
          this.float[2].stock = this.float[2].stock - 1;
        }
      }
    });
    return change;
  }

  buyItem(item, credit) {
    let cur = this.getItem(item);
    let coins = [2, 1, 0.25];
    if (cur.stock === 0) return "item not in stock";
    if (credit === cur.price) {
      cur.stock = cur.stock - 1;
      return "success";
    }
    if (credit > cur.price) {
      let change = this.getChange(credit - cur.price, coins);
      let giveCoins = this.getCoins(change);
      cur.stock = cur.stock - 1;
      return ["success", "change:", giveCoins];
    }
    if (credit < cur.price) {
      let add = this.getChange(cur.price - credit, coins);
      let addCoins = this.getCoins(add);
      return ["fail", "please add:", addCoins];
    }
    // return cur;
  }

  addCredit(val) {
    const values = [0.05, 0.1, 0.25, 1.0, 2.0, 5.0, 10.0];

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
