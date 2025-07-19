const pns = {
    lead: "Prn", 
    engineer: "Venkatesh",
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.engineer;
    }
};

const m2m = {
    pns,
    manager: "Yash", 
    lead: "Ashwin",
    engineer: "Harish",
    [Symbol.iterator]: function* () {
    yield this.manager;
    yield this.lead;
    yield this.engineer;
    yield* this.pns;
    }
};
/*
function* pnsitem(team) {
    yield team.lead; 
    yield team.engineer;
};
*/
/*
function* m2miter(team) {
    yield team.manager;
    yield team.lead;
    yield team.engineer;
    yield* team.pns;
};
*/
for(let name of m2m)
{
    console.log(name);
}
