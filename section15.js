/*
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return "vroom";
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.drive = function() {
    return "vroom vroom";
}

Toyota.prototype.honk = function() {
    return "beep beep";
}

const toyota = new Toyota({ title: "Toyota", color: "red" });
console.log(toyota.title); // "Toyota"
console.log(toyota.color); // "red"
console.log(toyota.drive()); // "vroom vroom"
console.log(toyota.honk()); // "beep beep"
*/
// ES6 classes:
class Car {
    constructor({title}) {
        this.title = title;
    }
    drive() {
        return "vroom";
    }
}

const car = new Car({ title: "Toyota" });
console.log(car); // "Toyota"
console.log(car.drive()); // "vroom"

class Toyota extends Car {
    constructor ({color, title}) {
        
        super({ title });

        this.color = color;
    }

    honk() {
        return "beep beep";
    }
}

const toyota = new Toyota({ title: "Toyota", color: "red" });
console.log(toyota.title); // "Toyota"
console.log(toyota.color); // "red"
console.log(toyota.drive()); // "vroom"
console.log(toyota.honk()); // "beep beep"

class Monster {
    constructor(options) {
        this.health = 100;
        this.name = options.name;
    }
}



class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(snake) {
        snake.health -= 10;
    }
}