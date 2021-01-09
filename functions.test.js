
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

const functions = require('./functions');

// toBe  mostly used for primitive types
test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 NOT to equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be Brian Archibald object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brian', lastName: 'Archibald'});
});
