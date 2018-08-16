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
      expect().toEqual();
    });
  });
  describe("when a customer inserts money", () => {
    it("should update credit", () => {
      expect().toEqual();
    });
  });
  describe("when a customer buys an item with exact change", () => {
    it("should return success remove 1 stock of item, reset credit", () => {
      expect().toEqual();
    });
  });
  describe("when a customer buys an item with more credit then the cost", () => {
    it("should return success remove 1 stock of item, return credit in change from float", () => {
      expect().toEqual();
    });
  });
  describe("when a customer does not have enouch credit to buy item", () => {
    it("should return failure", () => {
      expect().toEqual();
    });
  });
  describe("when a customer tries to buy item not in stock", () => {
    it("should return failure", () => {
      expect().toEqual();
    });
  });
  describe("when a customer tries to use > $10 bill", () => {
    it("should return failure", () => {
      expect().toEqual();
    });
  });

  // ------------------------------------
  // maineinence tests
  describe("when doing maintainence on the vending machine", () => {
    describe("when a worker wants to see items not in stock", () => {
      it("should return a list of items not in stock", () => {
        expect().toEqual();
      });
    });
    describe("when a worker wants to refill the stock", () => {
      it("should return success", () => {
        expect().toEqual();
      });
    });
    describe("when a worker wants to refill the float", () => {
      it("should return success", () => {
        expect().toEqual();
      });
    });
  });
});
