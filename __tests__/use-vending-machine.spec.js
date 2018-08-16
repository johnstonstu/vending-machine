const vendingMachine = require("../src/vending-maching.js");

// tests:
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

describe("when a customer is using the vending maching", () => {
  describe("when a customer wants to see all the items", () => {
    it("should return a list of all the items", () => {
      expect().toEqual();
    });
  });
  describe("when a customer wants to see items in stock", () => {
    it("should return a single item", () => {
      expect().toEqual();
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
});
