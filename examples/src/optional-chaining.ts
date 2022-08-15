interface IClass {
 className: string,
 code: string,
}

interface Address {
  city: string
}

interface IStudent {
  name: string,
  age:number,
  class?: IClass,
  address?: Address[]
}

const student1: IStudent = {
  name: "Nguyen Van C",
  age: 12,
  class: {
    className: "12A2",
    code: "12"
  }
}

console.log(student1.class?.code);
console.log(student1.address?.[0]);
