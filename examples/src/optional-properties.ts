interface IContact {
  name: string,
  phone: string,
  email?: string
}

const contacts: IContact[] = [];
const newContact: IContact = {
  name: "Ngoc",
  phone: "1223",
  email: "sd@gmail.com"
};

const otherContact: IContact = {
  name: "Nguyen Van A",
  phone: "1234567"
}

contacts.push(newContact);
console.log(contacts);
console.log(otherContact.email);

function test (email: string) {
  console.log(email);
}

if (otherContact.email) {
  test(otherContact.email);
} 
else {
  console.log('otherContact.email = undefined' );
}

// test(otherContact.email); // Error  "strictNullChecks": true
