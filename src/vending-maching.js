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
    let change = {
      toonies: 0,
      loonies: 0,
      quarters: 0
    };

    arr.filter(coin => {
      if (coin === 2) {
        change.toonies = change.toonies + 1;
        if (this.float[0].stock > 0) {
          this.float[0].stock = this.float[0].stock - 1;
        } else return "failure";
      }
      if (coin === 1) {
        change.loonies = change.loonies + 1;
        if (this.float[1].stock > 0) {
          this.float[1].stock = this.float[1].stock - 1;
        } else return "failure";
      }
      if (coin === 0.25) {
        {
          change.quarters = change.quarters + 1;
          if (this.float[2] > 0) {
            this.float[2].stock = this.float[2].stock - 1;
          } else return "failure";
        }
      }
    });
    return change;
  }

  buyItem(item, credit) {
    let cur = this.getItem(item);
    let coins = [2, 1, 0.25];
    this.addCredit(credit);
    if (cur.stock === 0) return "item not in stock";
    if (credit === cur.price) {
      cur.stock = cur.stock - 1;
      this.resetCredit();
      return "success";
    }
    if (credit > cur.price) {
      let change = this.getChange(credit - cur.price, coins);
      let giveCoins = this.getCoins(change);
      this.resetCredit;
      cur.stock = cur.stock - 1;
      return ["success", `change: $${credit - cur.price}`, giveCoins];
    }
    if (credit < cur.price) {
      let add = this.getChange(cur.price - credit, coins);
      let addCoins = this.getCoins(add);
      return ["fail", `please add: $${cur.price - credit}`, addCoins];
    }
  }

  addCredit(val) {
    if (val > 10 || typeof val !== "number") return "failure";

    this.data.credit += val;

    return { credit: this.data.credit };
  }

  resetCredit() {
    this.data.credit = 0;
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
