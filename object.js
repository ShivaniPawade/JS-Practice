// ===================       O B J E C T    ======================

//                                  -------  singleton
Object.create                          //    Object Constructor                          

//     Object Literals
const sym = Symbol("key")

const obj = {
    name: "shivani",
    age: 23,
    Address: "Nagpur",
    email: "shivani@gmail.com",
    "full name": "shivani Pawade",
    [sym]: "key"


}
console.log(obj.email);
console.log(obj["full name"]);     // [] with this if string contain space it does not cause error 
console.log(obj[sym]);
console.log(typeof [sym]);

obj.name = "chetan"               // -----  (=) signs helps to change the values of Object
console.log(obj)

//    Object.freeze(obj)              // ----- once we use the freeze method then it does not change the values of key in object

obj.Address = "Warora"
console.log(obj)

obj.greeting = function () {
    console.log("hello how are you mr chetan. ");
}
console.log(obj.greeting());

obj.greet = function () {
    console.log(`i live in  ${this.Address}`);
}
console.log(obj.greet());



//    ============   Another way to create object  ===========

const newObject = {}
newObject.name = "shivani"
console.log(newObject);

const newObject1 = {
    1: "one",
    2: "two",
    3: "three"
}
const newObject2 = Object.assign({}, newObject, newObject1)   // ------   Assign is used to combine different array into a single array
console.log(newObject2);                                  // ------   it focus on the  TARGET and SOURCE object   ___ refer :: MDN assign ___
console.log();

//    ==========================       how to find keys of object         ==========================


console.log(Object.keys(obj));      //  -------   key method

console.log(Object.values(obj));    //  -------   value method


//    ============      Another way to write object and its values   ============

const customer={
    name:"shivani",
    id:"123",
    email:"shivani@gmail.com"
}

const{name}=customer

const {name:selfname}=customer            //  ----- {name:selfname}  this is known as object DESTRUCTURING



console.log(selfname);
console.log(customer);      //  ---  it makes the code readable