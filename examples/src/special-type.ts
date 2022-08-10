// --------------------------------------------Type: any----------------------------------
let u = true;
/*
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.
console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
*/

let v: any = true;
v = "string"; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type
console.log('typeof v: ', typeof v);

let notSure: unknown = 4;
console.log('notSure', typeof notSure);
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
console.log('notSure', typeof notSure);

/*
declare const maybe: unknown;
// 'maybe' could be a string, object, boolean, undefined, or other types
const aNumber: number = maybe;
// Type 'unknown' is not assignable to type 'number'.
 
if (maybe === true) {
  // TypeScript knows that maybe is a boolean now
  const aBoolean: boolean = maybe;
  // So, it cannot be a string
  const aString: string = maybe;
// Type 'boolean' is not assignable to type 'string'.
}
 
if (typeof maybe === "string") {
  // TypeScript knows that maybe is a string
  const aString: string = maybe;
  // So, it cannot be a boolean
  const aBoolean: boolean = maybe;
// Type 'string' is not assignable to type 'boolean'.
}
*/

// ----------------------------------------Type: unknown-----------------------------
let exampleAny: any;
let exampleUnknown: unknown;

// I can assign anything to `any` type
exampleAny = {}
exampleAny = 123;

// I can also assign anything to `unknown` type
exampleUnknown = {}
exampleUnknown = 123;

let exampleAny1: any;
let exampleUnknown1: unknown;

// You can access Number.prototype method on any
// Without checking if the value is a number
console.log(exampleAny1?.toFixed());

// You can't access Number.prototype method on unknown
// Without checking if the value is a number
// console.log(exampleUnknown1.toFixed());
// ‼️ Error: Object is of type 'unknown'

// ------------------------------------------unknown vs any-----------------
// You can assign anything to unknown type but you have to do a type check or type assertion to operate on unknown
// You can assign anything to any type and you can perform any operation on any

//----------------------------------------------Type: void-----------------------------
// Declaring variables of type void is not useful because you can only assign null/undefined:
function warnUser(): void {
  console.log("This is my warning message");
}
let unusable1: void = undefined;

//-------------------------------------------Type: undefined & null---------------------------------
