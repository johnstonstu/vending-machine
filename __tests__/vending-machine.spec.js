const VendingMachine = require("../src/vending-maching.js");

// tests for customer:
/**
 * -total items => list
 * -single item => single item
 * -items in stock => list
 * -insert $ => update credit
 * -buy item exact change => success, remove 1 stock, reset credit
 * -buy item not enough $ => error
 * -buy item and give change => success, remove 1 stock, give change, reset credit
 * -buy item not in stock => error
 * -buy item > $10 bill => error
 */

// tests for maintaining vending machine
/**
 * -items not in stock => list
 * -add stock
 * -add float
 */

//  customer tests
describe("when a customer is using the vending maching", () => {
  let vendingMachine, processedData;

  beforeEach(() => {
    vendingMachine = new VendingMachine("../src/vending-data.json");
  });

  describe("when a customer wants to see all the items", () => {
    it("should return a list of all the items", () => {
      expect(vendingMachine.getAllItems()).toEqual([
        "choclate: 0",
        "candy: 5",
        "pop: 3",
        "chips: 0"
      ]);
    });
  });
  describe("when a customer wants to see items in stock", () => {
    it("should return a list of items only in stock", () => {
      expect(vendingMachine.getItemsInStock()).toEqual(["candy: 5", "pop: 3"]);
    });
  });
  describe("when a customer wants to see a single item", () => {
    it("should return a single item", () => {
      expect(vendingMachine.getItem("chips")).toEqual({
        name: "chips",
        price: 1.5,
        stock: 0,
        maxStock: 5
      });
    });
  });
  describe("when a customer wants to see a single item that does not exist", () => {
    it("should return item not found", () => {
      expect(vendingMachine.getItem("stu")).toEqual("item not found");
    });
  });
  describe("when a customer inserts money", () => {
    it("should update credit", () => {
      expect(vendingMachine.addCredit(5)).toEqual({
        credit: 5
      });
    });
  });
  describe("when a customer tries to use > $10 bill", () => {
    it("should return failure", () => {
      expect(vendingMachine.addCredit(20)).toEqual("failure");
    });
  });
  describe("when a customer buys an item with exact change", () => {
    it("should return success remove 1 stock of item, reset credit", () => {
      expect(vendingMachine.buyItem("candy", 0.5)).toEqual("success");
    });
  });
  describe("when a customer buys an item with more credit then the cost", () => {
    it("should return success remove 1 stock of item, return credit in change from float", () => {
      expect(vendingMachine.buyItem("candy", 1)).toEqual(
        "success",
        "change: 0.5"
      );
    });
  });
  describe("when a customer does not have enouch credit to buy item", () => {
    it("should return failure", () => {
      expect(vendingMachine.buyItem("pop", 1)).toEqual(
        "fail",
        "please add: $1"
      );
    });
  });
  describe("when a customer tries to buy item not in stock", () => {
    it("should return failure", () => {
      expect(vendingMachine.buyItem("choclate", 1)).toEqual(
        "item not in stock"
      );
    });
  });

  // ------------------------------------
  // maineinence tests
  describe("when doing maintainence on the vending machine", () => {
    describe("when a worker wants to see items not in stock", () => {
      it("should return a list of items not in stock", () => {
        expect(vendingMachine.getItemsNotInStock()).toEqual([
          "choclate",
          "chips"
        ]);
      });
    });
    describe("when a worker wants to refill the stock", () => {
      it("should return success", () => {
        expect(vendingMachine.addStock()).toEqual({
          items: [
            {
              name: "choclate",
              stock: 5,
              maxStock: 5
            },
            {
              name: "candy",
              stock: 5,
              maxStock: 5
            },
            {
              name: "pop",
              stock: 5,
              maxStock: 5
            },
            {
              name: "chips",
              stock: 5,
              maxStock: 5
            }
          ]
        });
      });
    });
    describe("when a worker wants to refill the float", () => {
      it("should return success", () => {
        expect(vendingMachine.addFloat()).toEqual({
          float: [
            {
              value: 10,
              stock: 10,
              maxStock: 10
            },
            {
              value: 5,
              stock: 10,
              maxStock: 10
            },
            {
              value: 2,
              stock: 10,
              maxStock: 10
            },
            {
              value: 1,
              stock: 10,
              maxStock: 10
            },
            {
              value: 0.25,
              stock: 40,
              maxStock: 40
            }
          ]
        });
      });
    });
  });
});
