/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { // check we're server-side
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}

test('getChange(1,1) should equal [] - an empty array', function(assert) {
  var result = getChange(1, 1); //no change/coins just an empty array
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
  var result = getChange(215, 300); // expect an array containing [50,20,10,5]
  var expected = [50, 20, 10, 5];
  assert.deepEqual(result, expected);
});

test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
  var result = getChange(486, 600);
  var expected = [100, 10, 2, 2];
  assert.deepEqual(result, expected);
});

test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(assert) {
  var result = getChange(12, 400);
  var expected = [200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});
test('getChange(0, 0) should return [] - no change needed', function(assert) {
  var result = getChange(0, 0);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(100, 100) should return [] - exact change given', function(assert) {
  var result = getChange(100, 100);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(321, 321) should return [] - exact change given', function(assert) {
  var result = getChange(321, 321);
  var expected = [];
  assert.deepEqual(result, expected);
});

test('getChange(743, 1000) should return [200, 50, 5, 2] - various denominations used', function(assert) {
  var result = getChange(743, 1000);
  var expected = [200, 50, 5, 2];
  assert.deepEqual(result, expected);
});

test('getChange(1, 999) should return [200, 200, 200, 200, 100, 50, 20, 10, 5, 2, 1] - large amount of change', function(assert) {
  var result = getChange(1, 999);
  var expected = [200, 200, 200, 200, 100, 50, 20, 10, 5, 2, 1];
  assert.deepEqual(result, expected);
});

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
