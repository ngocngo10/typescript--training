//--------------------declarations var----------------------
function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}
var g = f();
g(); // returns '11'
console.log(g());

function f1() {
  var c = 1;
  c = 2;
  var d = g();
  d = 3;
  return d;
  function g() {
    return c;
  }
}
f1(); // returns '3'
console.log(f1());

//--------------------------Scoping rules----------------------
// function f2(shouldInitialize: boolean) {
//   if (shouldInitialize) {
//     var x = 10;
//   }
//   return x;
// }
// f2(true); // returns '10'
// f2(false); // returns 'undefined'
// console.log('f2(true) = ', f2(true));
// console.log('f2(false)', f2(false));

function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    console.log('before currentRow', currentRow);
    
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
      console.log('after currentRow', currentRow);
    }
  }
  return sum; //3
}

var arr: number[][] = [[1, 2], [3, 4]];
console.log('sumMatrix(arr)', sumMatrix(arr));

//------------------------------Variable capturing quirks---------------------
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}

for (var i = 0; i < 10; i++) {
  // capture the current state of 'i'
  // by invoking a function with its current value
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  })(i);
}
//------------------------------Block-scoping--------------------
function f3(input: boolean) {
  let a = 100;
  if (input) {
    // Still okay to reference 'a'
    let b = a + 1;
    return b;
  }
  // Error: 'b' doesn't exist here
  return b;
}

a++; // illegal to use 'a' before it's declared; Error
let a;
b++;
var b

function f4(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}

let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

function f5(x) {
  let x = 100; // error: interferes with parameter declaration
}

function g1() {
  let x = 100;
  var x = 100; // error: can't have both declarations of 'x'
}

function f6(condition, x) {
  if (condition) {
    let x = 100;
    return x;
  }
  return x;
}
f6(false, 0); // returns '0'
f6(true, 0); // returns '100'
//-----------------------------const-------------------------
const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
};
// Error
kitty = {
  name: "Danielle",
  numLives: numLivesForCat,
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
