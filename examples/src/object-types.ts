const car: {type: string, model: string, year: number} = {
  type: "hhhhh",
  model: "Corolla",
  year: 2009
};
console.log(car);

//------------------------------Type Inference----------------
const car1 = {
  type: "Toyota",
};

car1.type = "Ford"; // no error
// car1.type = 2; // Error: Type 'number' is not assignable to type 'string'.
console.log(car1);

//------------------------------Optional Properties---------------------
/*Example without an optional property
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
*/

//Example with an optional property
const bicycle: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
console.log(' before bicycle', bicycle);

bicycle.mileage = 2000;
console.log('after bicycle', bicycle);

//------------------ Index Signatures----------------------------
//Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
