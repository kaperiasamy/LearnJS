// Generators

function* numbers()
{
    yield 1;

    return -1;
}

/*
const gen = numbers();
//gen.next();

console.log(gen.next());
console.log(gen.next());
*/

function* addOne() {
    let value = 0;
    
    yield value;
    
    value++;
    yield value;

    value++;
    yield value;

    value++;
    return value;
}

/*const inc = addOne();
console.log(inc.next());
console.log(inc.next());
console.log(inc.next());
console.log(inc.next());
console.log(inc.next());
*/
/*
for(let n of addOne())
{
    console.log(n);
}
*/
console.log("----------")

const pns = {
    lead: "Prn", 
    engineer: "Venkatesh"
};

const m2m = {
    pns,
    manager: "Yash", 
    lead: "Ashwin",
    engineer: "Harish"
};

function* pnsitem(team) {
    yield team.lead; 
    yield team.engineer;
};

function* m2miter(team) {
    yield team.manager;
    yield team.lead;
    yield team.engineer;
    const pnsitr = pnsitem(team.pns);
    yield* pnsitr;
};

for(let name of m2miter(m2m))
{
    console.log(name);
}
