// reduce
import { printArray, log, debugLog } from './logHelper.js';

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

log("Sum of numbers using for loop:", sum);

sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

log("Sum of numbers using reduce:", sum);

//---------------------------------------
var colorsArray = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'yellow' },
  { color: 'orange' },
  { color: 'purple' },
  { color: 'pink' },
  { color: 'brown' },
  { color: 'black' },
  { color: 'white' }
];

// Now I want only the colors in the array
var colors = colorsArray.reduce(function(accumulator, currentValue) {
  accumulator.push(currentValue.color);
  return accumulator;
}, []);

printArray("Colors from colorsArray using reduce:", colors);

// This logic is not correct 
function balanceParentheses(str) {
  return !str.split('').reduce(function(accumulator, char) {
    if(accumulator < 0) {
      return accumulator; 
    }
    if (char === '(') {
      accumulator++;
    } else if (char === ')') {
      accumulator--;
    }
    return accumulator;
  }, 0);
}

debugLog("Balance of parentheses in '(()())':", balanceParentheses('(()())'));
debugLog("Balance of parentheses in '{}}{':", balanceParentheses('{}}{'));


function isBalanced(str) {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  const result = str.split('').reduce((stack, char) => {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (stack[stack.length - 1] === pairs[char]) {
        stack.pop();
      } else {
        // Add a mismatch marker to stack to invalidate it
        stack.push(char);
      }
    }
    return stack;
  }, []);

  return result.length === 0;
}

debugLog("Balance of parentheses in '(()())':", isBalanced('(()())'));
debugLog("Balance of parentheses in '{}}{':", isBalanced('{}}{'));


var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var distance = 0
var totalDistance = trips.reduce(function(distance, trip) {
    return distance + trip.distance;
}, distance);

log("Total distance of trips using reduce:", totalDistance);

/*
Reducing Properties

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)

*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(accumulator, desk) {
  if (desk.type === 'sitting') {
    accumulator.sitting++;
  } else if (desk.type === 'standing') {
    accumulator.standing++;
  }
  return accumulator;
    
}, { sitting: 0, standing: 0 });

log("Desk types count using reduce:", deskTypes);

/*
Hardmode: Custom 'Unique' Helper

Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/
function unique(array) {
  return array.reduce(function(accumulator, currentValue) {
    if (!accumulator.find(item => item === currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}

var numbers = [1, 1, 2, 3, 4, 4];
var uniqueNumbers = unique(numbers);
log("Unique numbers from array using custom 'unique' function:", uniqueNumbers);
