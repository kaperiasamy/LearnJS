// Find - search through the array for a value. As soon as the value is found, with the given criteria, the search stops, and returns the value.

import { printArray, log, debugLog } from './logHelper.js';

var users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
  { name: 'David' },
  { name: 'Eve' },
  { name: 'Frank' },
  { name: 'Grace' },
  { name: 'Hannah' },
  { name: 'Irene' },
  { name: 'Jack' }
];

var user;

user = users.find(function(user) {
  return user.name === 'Eve';
});
debugLog("Found User", user);

var admin = users.find(function(user) {
  return user.admin === true;
});
debugLog("Found Admin", admin);

function Car(model, brand, price, year, color) {
  this.model = model;
  this.brand = brand;
  this.price = price;
  this.year = year;
  this.color = color;
};

// Creating an array of car objects
var cars = [
  new Car('Model S', 'Tesla', 8000000, 2022, 'Red'),
  new Car('Civic', 'Honda', 2200000, 2021, 'White'),
  new Car('Corolla', 'Toyota', 2100000, 2020, 'Silver'),
  new Car('Mustang', 'Ford', 5500000, 2022, 'Blue'),
  new Car('A4', 'Audi', 4500000, 2021, 'Black'),
  new Car('i20', 'Hyundai', 900000, 2019, 'Grey'),
  new Car('Compass', 'Jeep', 3000000, 2023, 'Green'),
  new Car('X5', 'BMW', 9500000, 2023, 'White'),
  new Car('Altroz', 'Tata', 800000, 2020, 'Yellow'),
  new Car('Swift', 'Maruti Suzuki', 750000, 2022, 'Red')
];

var filteredCars = cars.find(function(car) {
  return car.model === "Corolla";
});
debugLog("Filtered Car", filteredCars);

var posts = [
    { id: 1, title: 'Content of Post One' },
    { id: 2, title: 'Content of Post Two' },
    { id: 3, title: 'Content of Post Three' },
    { id: 4, title: 'Content of Post Four' }
];

var comment = { postId: 1, content: "This is a comment for Post One" };

function postForComment(comment, posts) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}
var postForCommentResult = postForComment(comment, posts);
debugLog("Post for Comment", postForCommentResult);

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
  return account.balance === 12;
});
debugLog("Found Account", account);

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

var height25 = findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
debugLog("Height 25 Ladder", height25);

function findWhere(array, criteria) {
    return array.find(function(element) {
        var property = Object.keys(criteria);
        return element[property] === criteria[property];
    });
}