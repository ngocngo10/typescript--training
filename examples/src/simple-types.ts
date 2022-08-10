// Explicity Type
let firstName: string = "Dylan"; // type string
console.log(typeof firstName);

// Implicit Type
let lastName = "Dylan";
console.log(typeof lastName);
console.log(lastName);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
console.log(fullName, age, sentence);

/*
let str1: string = "Hello Word"; // type string
str1 = 33; // attempts to re-assign the value to a different type
console.log(str1);

let str2: string = "Hello Word"; // type string
str2 = 33; // attempts to re-assign the value to a different type
console.log(str2);
*/

// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");

// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

//----------------------------------------ARRAY---------------------------------
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3, 4];
console.log(list, list1);

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);

const names1: readonly string[] = ["Dylan"];
// names1.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log(names1);

const numbers = [1, 2, 3]; // inferred to type number[]
console.log(`numbers[3] = ${numbers[3]}`); //undefined

numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error

//-------------------------------------------TUPLE-------------------------------------
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);
ourTuple = [51, false, 'Coding God was here'];
console.log(ourTuple);
// initialize incorrectly throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
console.log(ourTuple);
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

//-------------------------------------------ENUM------------------------------------
//             -------------------Numeric Enums - Default-----------------
enum Color {
  Red,
  Green,
  Blue
}
//By default, enums will initialize the first value to 0 and add 1 to each additional value:
let c: Color = Color.Red; //0
let d: Color = Color.Blue; //2
console.log('c d', c, d);
// let c = 1; //Error--An enum is a special "class" that represents a group of constants (unchangeable variables).
console.log(c);

enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

//                 --------------String Enums-------------
enum CardinalDirections {
  North1 = 'North1',
  East1 = "East1",
  South1 = "South1",
  West1 = "West1"
};
// logs "North1"
console.log(CardinalDirections.North1);
// logs "West1"
console.log(CardinalDirections.West1);
// if we had the value 2 but weren’t sure what that mapped to in the CardinalDirections enum above, we could look up the corresponding name:
let direction: string = CardinalDirections[2];
console.log('direction', direction);
