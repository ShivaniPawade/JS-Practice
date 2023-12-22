
// 1) variables,       datatypes,          types of data,           operators,           types of operators

// JavaScript is a DYNAMICALLY TYPED LANGUAGE.Because data type will automatically assigned at the time of compilation or code execution. 

////////////////////////////////////////////////////////////////////////       in js three types of VARIABLES are there

//  const --- its value cannot change once declare and it should be initilze during declaration 
//   Eg
const abc = 23
// abc=10 not allowed in const
console.log(abc)

// let ---- it is known as local variable and it comes inside the scope 

let xyz = "string"
console.log(xyz)

// var is a global variable and in now a days we only use const and let 

var a = "string"
console.log(a)


///////////////////////////////////////////////////////////////////      DATATYPES

// there are various types of data types in js 

// N --- null
// N --- Number
// S --- String              also known as the primitve data type [N-N-S-S-B-B-U]    also known as call by value
// S --- symbool
// B --- Boolean            
// B --- BigInt  it is written as 
// U --- undefined

const bigint = 453546632425353n
console.log(bigint)

// non primitive data type also known as call by reference 

// array , object,  functions 

// A R R A Y  IS  a collection of  different types of data  

const arr = [1, 2, 3, 4]   //array
console.log(arr)

const arr1 = {
    name: "shiv",   //object
    age: 23
}

const func = function (a, b) {     //function
    return a + b;
}
console.log(func(3, 4))

console.log(arr1)

// NULL MEANS THAT THE VALUE IS EMPTY                   NuLL ==IS A object
// AND UNDEFINED MEANS THAT THE VARIABLE IS DEFINED BUT NOT INITIALIZED     //and it is a datatype

// typeof is used to find the type of a data
console.log(typeof 1)
console.log(typeof "shivani")

// if we give value for ex : "33" - number   "33ab" - NaN(not in number)
let istype = 1
let checkType = Boolean(istype)
console.log(typeof (checkType))

///////////////////////////////////////////////////////////////          OPERATOR IN JS

// comparision operator to check it 

console.log(2 == 1)
console.log(2 != 1)
console.log(2 > 1)  //to compare the datatype should be same
console.log(1 < 1)
console.log("2" > 1)

// === it is known as "strict check"
// it also checks the type of variable

// Arithmetic Operators.  (+,-,*,/,%)

console.log(10+20)
console.log(10-20)
console.log(10*20)        // it is used to perform calculation
console.log(10/20)
console.log(10%20)
console.log('===================');
// A s s i g n m e n t  operator

let assin = 10
console.log(assin+=10)
console.log(assin-=10)
console.log(assin*=10)
console.log(assin/=10)
console.log(assin%=10)


// Logical Operators.  (&,||,!)

let assi1 = 5,assi2=10
console.log(assi1<assi2 && assi2>assi1)
console.log(assi1<assi2 || assi1==assi2)
console.log(!true)


// Ternary Operators.   

const ternary=20
const test=ternary >=25?"hey":"hello";
const check=ternary <=20 ? "right" : "wrong";
console.log(test)
console.log(check);

let age = 23
let vote=age>=18?"you can vote":"You cannot vote";
console.log(vote)


// Bitwise Operators.



// typeof Operator.