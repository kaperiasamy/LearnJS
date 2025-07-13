// map helper

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log("Doubled Numbers: " + doubledNumbers.join(", "));

console.log("--------------");

var doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled Numbers using map: " + doubled.join(", "));

console.log("--------------");

const cars = [
  {
    model: "Model S",
    brand: "Tesla",
    price: 80000,
    year: 2022,
    color: "Red"
  },
  {
    model: "Civic",
    brand: "Honda",
    price: 25000,
    year: 2020,
    color: "Black"
  },
  {
    model: "Corolla",
    brand: "Toyota",
    price: 22000,
    year: 2021,
    color: "White"
  },
  {
    model: "Mustang",
    brand: "Ford",
    price: 55000,
    year: 2023,
    color: "Blue"
  },
  {
    model: "A4",
    brand: "Audi",
    price: 45000,
    year: 2021,
    color: "Gray"
  }
];

var colors = cars.map(function(car) {
    return car.color;
});
console.log("Car Colors: " + colors.join(", "));
console.log("--------------");

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
    return image.height;
});
console.log("Heights: " + heights.join(", "));
console.log("--------------");

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});
console.log("Speeds: " + speeds.join(", "));
console.log("--------------");

var paints = 
[ 
    { color: 'red' }, 
    { color: 'blue' }, 
    { color: 'yellow' }];

var props = pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];


function pluck(array, property) {
  return array.map(function(item) {
    return item[property];
  });
}

console.log("props: " + props.join(", "));
console.log("--------------");
