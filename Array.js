// ========================================      A R R A Y      ===================================

const array=[1,2,3,4,5]
const array1=['a','b','c']
const array2=[{a:'apple',b:'ball'}]  // --- array of object.

const array3=new Array(1,2,3,4)
console.log(array3[2]);

// document.getElementById("demo").innerHTML=array.join("-")
console.log(array);
console.log(array1);
console.log(array2);


        // ========================          A R R A Y  methods       ================================

console.log(array.length)                      // Array length     ------- it finds the length

array.push(6)
console.log(array);                            // Array push()     ---      it adds the value after the  last element

array.pop()
console.log(array);                            // Array pop()      ---      it removes the last element from the array

array.toString()
console.log(array);                            // Array toString()


array.unshift(9)                               // Array unshift()  ---  it adds the element to the start
console.log(array);

array.shift()                                  // Array shift()     ---  it removes the element from the start
console.log(array);

newArray=array.join()                          // Array join()     ---   it return the array into the string
console.log(newArray);   

console.log("                          ");

                // =======================   difference between slice and splice    ===========================

  newarr=array.slice(1,3)           // slice it only return the array from start range to -1 before end range (1,3) and it returns the original array
  console.log(newarr);   
  console.log("A ",array);    
  
  
  newarr=array.splice(1,3)         // splice it returns the array fro m start to end range but it does not return the original array
  console.log(newarr);   
  console.log("B ",array);           
                
  newarr=array.concat(array1)     //  concat it merge two array and it returns the new array
  console.log(newarr); 

  const anotherArray=[1,2,3,[4,5],[6,7,8,[9,10]]]   // flat method returns the mixarray into the single array
  flatArray=anotherArray.flat(Infinity)
  console.log(flatArray);
  console.log(anotherArray);


                //   ========   isArray  =====    from   =======     of    ==========  array methods


console.log(Array.isArray("shivani"));      // isArray checks it is array or not
console.log(Array.from("shivani"));         // from converts the string to the array form 


let score1 = 1000
let score2 = 2000
let score3 = 3000
let score4 = 4000

const score = Array.of(score1,score2,score3,score4)  // of method coverts the variables stored values into the new aray form
console.log(score);

console.log("-----------------------------");


                          /////////////////        cloning      ///////////////

 let arr=[10,20,30,40,50]
 let arr1=['a','b']

//                         first way of cloning

 arr = arr.slice(0);
console.log(arr);

//                         second way of cloning

 arr = [].concat(arr);
console.log(arr);

//                         third way of cloning      


// (...) using spread operator 

arr = [...arr,4,5,6,"xyz"];      // spread operator spreads the array into the single element 
console.log(arr);

arr = [...arr1,"shivani"];
console.log(arr);

console.log("--------------------------------------");


                               //  array DESTRUCTURING   //


const arr3 = ["shivani","chetan","mahima","xyz","abc","mno"];


const [name1,name2,name3,...otherdata] = arr3;
console.log(name1)
console.log(name2)
console.log(name3)
console.log(otherdata)