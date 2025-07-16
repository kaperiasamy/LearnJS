import { printArray, log, debugLog } from './logHelper.js';

const family = {
    name: "Periasamy's Family",
    members: [
        "Selvalakshmi", 
        "Baanu Parani",
        "Priyadharshini"
    ],
    familySummary: function() {
        return this.members.map(member => {
            return `\n${member} is a member of the ${this.name}`;
        });
    }
}

console.log(family.familySummary().join(""));

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const profile = {
    name: 'Alex', 
    /*
    getName: () => {
        // In this arrow function, this does not refer to the profile object. 
        // Instead, arrow functions don’t have their own this—
        // they inherit it from the surrounding context, 
        // which in this case is likely the global scope. So this.name ends up being undefined.
        return this.name;
    }
    */
    getName: function() {
        // This is a regular function, so 'this' refers to the profile object.
        return this.name;
    }
};

log("Profile Name:", profile.getName());