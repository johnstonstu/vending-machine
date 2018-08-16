const vendingMachine = require("../src/vending-maching.js");

// tests:
/**
 * -total items => list
 * -single item => single item
 * -items not in stock => list
 * -items in stock => list
 * -buy item exact change => success, remove 1 stock
 * -buy item not enough $ => error
 * -buy item and give change => success, remove 1 stock, give change
 * -buy item not in stock => error
 * -buy item > $10 bill => error
 *
 * -add stock => success
 * -add float => success
 */

describe("vendingMachine", () => {
  describe("when a customer wants to use the vending machine", () => {
    describe("when a worker wants to see all items", () => {
      it("should return a list of items, with price and current stock", () => {
        expect(data).toEqual({
          items: {
            choclate: {
              price: 1,
              stock: 5
            },
            pop: {
              price: 1,
              stock: 5
            },
            choclate: {
              price: 1,
              stock: 0
            },
            pop: {
              price: 1,
              stock: 0
            }
          }
        });
      });
    });
    describe("when a worker wants to see what items are in stock", () => {
      it("should return a list of items in stock, with stock remaining", () => {
        expect(data.inStock).toEqual({
          items: {
            choclate: {
              stock: 5
            },
            pop: {
              stock: 5
            }
          }
        });
      });
    });
    describe("when a worker wants to see what items are not in stock", () => {
      it("should return a list of items in stock", () => {
        expect(data.noStock).toEqual({
          items: ["chips"]
        });
      });
    });
  });
  describe("when doing maintainence on the vending machine", () => {
    describe("when a customer wants info on a specific item", () => {});
  });
});
