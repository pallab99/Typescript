let ourtuple:[number,boolean,string];

ourtuple=[10,true,"pallab"];

console.log(ourtuple);
ourtuple = [false, 'Coding God was mistaken', 5]; /// initialized incorrectly which throws an error

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');