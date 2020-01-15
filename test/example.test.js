// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});
import compareNumbers from './compare-number.js';

test('the numbers are identical', assert => {
    const input = 15
    const random = 15
    const expected = 0
  

    const result = compareNumbers(random, input);
    assert.equal(result, expected,);
});
test('the random number is greater than guessed number', assert => {
    const input = 12
    const random = 13
    const expected = -1

    const result = compareNumbers(random, input);
    assert.equal(result, expected); 
});
test('the random number is less than guessed number', assert => {
    const input = 15
    const random = 14
    const expected = 1

    const result = compareNumbers(random, input);
    assert.equal(result, expected);
});