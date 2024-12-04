console.log("hello world")
console.warn("not")
console.error("not")

let a = 10;
let b = 20;

console.log(a+b)
console.log(a-b)

let y = 10;
console.log(y == 10);  // true
console.log(y === "10");  // false (strict comparison)
console.log(y != 5);  // true

let z = true;
console.log(z && false); // false
console.log(z || false); // true
console.log(!z); // false

let name = "Alice";
let greeting = "Hello, " + name; // "Hello, Alice"
console.log(greeting)
let greetingTemplate = `Hello, ${name}`; // "Hello, Alice"

let age = 20;

if(age>=20){
    console.log("good")
}else{
    console.log("bad")
}

let status = (age >= 18) ? "Adult" : "Minor";

for (let i = 0; i < 3; i++) {
    console.log(i);
}
let arr = [1,2,3,4]

console.log(arr)

const person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person)
console.log(person.name)

person.age = 45
console.log(person.age)

console.log(Object.keys(person)); // ["name", "age", "gender"]
console.log(Object.values(person)); // ["Alice", 26, "female"]
//console.log(Object.entries(person)); // [["name", "Alice"], ["age", 26], ["gender", "female"]]
