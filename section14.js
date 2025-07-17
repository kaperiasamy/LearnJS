const points = [
    [1, 3], 
    [3, 5], 
    [7, 3],
    [9, 1],
    [2, 4],
]

const coord = points.map(([x, y]) => {
    return [ x, y];
});

console.log(coord); 


const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) { 
  return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile)); // true

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return { subject, time, teacher };
});

console.log(classesAsObject);

const numbers = [1, 2, 3];

function double([n1, n2, n3]) {
    return [n1 * 2, n2 * 2, n3 * 2];    
}

const doubled = double(numbers);
console.log(doubled); // [2, 4, 6]
