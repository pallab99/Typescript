const names: string[] = [];

names.push("Dylan"); // no error

// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(names);

// Type Inference
// TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0];
console.log(head);// no error

let skills: string[] = [];
skills[0] = "Problem Solving";
skills[1] = "Programming";


skills.push("Software Engineer");

console.log(skills);

console.log(typeof (skills));

let scores = ['Programming', 5, 'Software Design', 4];

console.log(scores);

let scores1: (string | number)[];
scores1 = ['Programming', 5, 'Software Design', 4];

console.log(scores1);