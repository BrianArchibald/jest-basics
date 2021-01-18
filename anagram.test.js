const isAnagram = require('./anagram');

test('isAnagram is a function', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('dormitory is an anagram of dirty room##', () => {
  expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy();
});

test('hello is not an anagram of red', () => {
  expect(isAnagram('hello', 'red')).toBeFalsy();
});
