interface IPerson {
  firstName: string,
  readonly lastName: string,
  sayHi?: () => string
}

let customer: IPerson = {
  firstName: "Ngoc",
  lastName: "Ngo",
  sayHi: (): string => {
    return "Xin Chao"
  }
}

console.log(customer.firstName + " " + customer.lastName);

interface Student extends IPerson {
  className: string
}

let student = {
  firstName: "hhh",
  lastName: "ss",
  className: "12"
}

class Teacher implements IPerson {
  firstName: string;
  lastName: string;
  sayHi?: (() => string) | undefined;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

let teacher = new Teacher("ddd", "dddd");

interface numberArray {
  [index: number]: number
}

let arr1: numberArray = [1, 2, 3];
console.log((arr1));

interface LabeledValue {
  label: string;
}
 
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
