//  w h a t  is function in js 

// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// there are 5 types of functions in js 

// 1) normal 

// 2) parameterized

// 3) arrow 

// 4) expressive

// 5) callback 


//                                ===========    normal function  ==============

function name( ) {
    console.log("hello")
}
name()


// function shivani() {
//     console.log("shivani");
// }
// shivani()

//                     =======================  p a r a meterized function  =====================

function calculate(a,b) {
    return a+b
 }
console.log((calculate(25,25)))
// (calculate(25,25))          -------- here the funstion is executedd but if we do not console the function the function will not be printed

function age(a,b) {
    if(a>b && a>=b){
        console.log("a can drive the vehicle")
    }
    else{
        console.log("a cannot drive the vehicle")
    }
}
console.log(age(20,18))
console.log(age(20,38))

// function evenOdd(s) {
//     if (s%2==0) {
//         console.log('it is a even no');
//     }
//     else{
//         console.log('it is a odd no');
//     }
// }
// console.log(evenOdd(23));
// (evenOdd(22));

//                     ============================  arrow function   ===============================

let number = (a,b) =>{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
number(10,20)
// number(23,44)

const checkNumber = (a) =>{
if(a>0){
    console.log("positive number");
}else{
    console.log("negative number");
}
}
console.log(checkNumber(-199))


const namee = (a) =>{
    console.log(`the name you entered is ${a} and he is my only brother named ${a}`);
}
namee('Manish')

const evenNumber = (num) => num%2==0
console.log(evenNumber(6));
console.log(evenNumber(-7));


//                                 little IDEA ABOUT REST AND SPREAD OPERATOR 

function numb(...a) {          //(... it is known as spread operator)
    console.log(a);
}
numb(2,3,4,5)

function numbers(val1,val2,...a) {          //(... it is known as rest operator)
    console.log(a);
}
numbers(23,34,45,56)

//                                 =========  to pass the object values in function ===========

const obj={
    name:"chetan",
    age:26
}

function checkObj(Object) {
    console.log(`my name is ${Object.name} and my age is ${Object.age}`);
}
checkObj(obj)

checkObj({
    name:"shivani",
    age:23
})

//                                    =========  to pass the arr values in function ===========

const myArray=[1,2,3,4,5]

const returnArray=(getArray) =>{
    return getArray
}
console.log(returnArray(myArray))
console.log(returnArray([20,30,40,50]))





//                                    =====================  Expresive function  ===========================

const addNumber = function(num){
    console.log(num+5);                 //  ---- if return keyword is not used then direct the function is printed without console.
}
addNumber(50)

let addNumb = function(num){
    return num+5
}
console.log (addNumb(50))              //  ----  if return is used then without console the function does not get printed.



//                                     =====================  Callback function  ===========================

function myfunction(){
        console.log("this is callback");
    }
    
    function abc(call){
        call();
    }
    
    abc(myfunction)


//  call back function through the arroe function

    const arrowFunc=()=>console.log("my weakness is sweet and i want to overcome it.");
    const arrowFunc1=(parameter)=>parameter();
    arrowFunc1(arrowFunc)
    arrowFunc(arrowFunc1)