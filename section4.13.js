import { printArray, log, debugLog } from './logHelper.js';

const products = [
  { name: 'Cucumber', type: 'Vegetable', quantity: 30, price: 10 },
  { name: 'Banana', type: 'Fruit', quantity: 50, price: 5 },
  { name: 'Carrot', type: 'Vegetable', quantity: 25, price: 8 },
  { name: 'Apple', type: 'Fruit', quantity: 40, price: 15 },
  { name: 'Tomato', type: 'Vegetable', quantity: 60, price: 7 },
  { name: 'Orange', type: 'Fruit', quantity: 35, price: 12 },
  { name: 'Spinach', type: 'Vegetable', quantity: 20, price: 6 },
  { name: 'Grapes', type: 'Fruit', quantity: 45, price: 18 },
  { name: 'Potato', type: 'Vegetable', quantity: 100, price: 4 },
  { name: 'Mango', type: 'Fruit', quantity: 15, price: 25 }
];

// Type is vegetable, quantity is greater than 0, and price is less than 10
const filteredProducts = products.filter(function(product) {
  return product.type === 'Vegetable' 
  && product.quantity > 0 
  && product.price < 10
});
debugLog("Filtered Products", filteredProducts);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;
filteredNumbers = numbers.filter(function(num) {
  return num > 50;
});
debugLog("Filtered Numbers", filteredNumbers);

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
  return user.admin;
});
debugLog("Filtered Users", filteredUsers);



function reject(array, iteratorFunction) {
  return array.filter(function(element) {
    return !iteratorFunction(element); // Negate the condition
  });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 

debugLog("Less Than Fifteen", lessThanFifteen); // [ 10 ];
