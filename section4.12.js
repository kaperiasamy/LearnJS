import { printArray, log, debugLog } from './logHelper.js';

const products = [
  { name: 'Cucumber', type: 'Vegetable' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Apple', type: 'Fruit' },
  { name: 'Tomato', type: 'Vegetable' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Spinach', type: 'Vegetable' },
  { name: 'Grapes', type: 'Fruit' },
  { name: 'Potato', type: 'Vegetable' },
  { name: 'Mango', type: 'Fruit' }
];

debugLog("Products", products);

// var fruits = [];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].type === 'Fruit') {
//         fruits.push(products[i].name);
//     }
// }
// debugLog("Fruits", fruits);

var fruits = products.filter(function(product) {
    return product.type === 'Fruit';
});
debugLog("Fruits", fruits);

console.log("--------------");