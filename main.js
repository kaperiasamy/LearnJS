var colors = ['red', 'green', 'blue'];

for(i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
console.log("--------------");
colors.forEach(function(color){
    console.log(color);
});
console.log("--------------");

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

function adder(num) {
    sum += num;
}

numbers.forEach(adder);
console.log("Sum of numbers: " + sum);
console.log("--------------");


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

function getArea(image) {
    areas.push(image.height * image.width);
}

var areas = [];

images.forEach(getArea);

areas.forEach(function(area) {
    console.log("Area: " + area);
});

console.log("--------------");

