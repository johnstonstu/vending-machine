# Vending Machine

An excersise in Test and Behavioral Driven Development.

By: [Stu Johnston](https://github.com/johnstonstu)

## Goal

The task is to implement a vending machine in JavaScript.

The vending machine itself should be a Javascript class. No interface for using the vending machine is required, just tests to prove that it works.

## Requirements

- Have at least 10 well-formed, passing tests
- Contain a reasonably DRY (Don't Repeat Yourself) implementation, though the tests can be verbose
- Have a screenshot (or screenshots) in its README of the test output in your terminal

## Functionality

- Have functionality for printing inventory
- Have functionality for refilling inventory
- Have functionality for re-supplying change
- Have functionality for dispensing inventory based on payment
  Have functionality for returning change as coins (eg. $0.5 is 2 quarters)

## Tests

`total items => list`
`single item => single item`
`items in stock => list`
`insert $ => update credit`
`buy item exact change => success, remove 1 stock, reset credit`
`buy item not enough $ => error`
`buy item and give change => success, remove 1 stock, give change, reset credit`
`buy item not in stock => error`
`buy item > $10 bill => error`
`items not in stock => list`
`add stock => update item stock`
`add float => update float stock`

## Installation

- `cd /path/to/repository`
- `npm install`

## Run Tests

- `cd /path/to/repository`
- `jest` if jest not found, see dependancies

### Dependancies:

- [Jest](https://jestjs.io/docs/en/getting-started) - App Development Platform

## Screenshots:

![Passing Tests](/screenshots/passTest.png?raw=true)
