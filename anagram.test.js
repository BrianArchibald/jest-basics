const isAnagram = require('./anagram');

test('isAnagram is a function', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});
