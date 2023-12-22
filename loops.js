                  //  ================    LOOPS    ========================
  
// ----------  ctrl+shift+l it is used to give multiple cursor selection


  const array=[1,2,3,4,5,6,7,8,9,10]                
  for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    // console.log(element);
    console.log(array[i]);
  }     

  console.log("----------------------------");
             
  for (let i =0; i <=1; i++) {
   console.log(`outer loop : ${i}`);
    for (let j =1; j <=1; j++) {
        // console.log(`inner loop : ${j} and ${i}`);
        console.log(i + `*`+ j + `=` + i * j);
    }
  }           
             
console.log("--------------------");

  for (let index = 0; index < array.length; index++) {
    if(index==5){
        console.log("it will stop after applyiing break");
        continue;
    }
    console.log(index);;
    
  }

  console.log("---------------------------");



             //            ========   W H I L E  loop    =========

let arr=0;
let myArr=['mom','dad','bro','sis']    // ----  with array

while(arr < myArr.length){
  console.log(`my family member - ${arr} : ${myArr[arr]}`);
  arr++;
}

let a=0;                  //  ----  normal loop
while (a<10) {               
  console.log(a);
  a=a+3;
}


          //            ======== Do  W H I L E  loop    =======

let score = 20;
do {
  console.log(`its my score ${score}`);
  score++;
} while(score<=0)

console.log("---------------------------");


//            =============       HIGH ORDER ARRAY LOOP    ==========


       //  ----------  for OF loop

let fruits=['apple','banana','grape','mango','chiku']    //   ------  ARRAY
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("---------------------------");


let fullName=("SHIVANIPAWADE")              //  --- string
for (const fname of fullName) {
  console.log(fname);
}

console.log("---------------------------");


const userDetails={                       //  --------  OBJECT IS NOT ITERABLE
  name:"anjali",
  id:"2345",
  email:"anjali@gmail.com"
}

const obj={}
obj.name='shivani',
obj.age='23',
obj.city='nagpur'

//   --  using for of loop the object is not iterable so to solve we use  --------  FOR IN LOOP 

// for (const userDetail of userDetails) {
//   console.log(userDetail);
// }


             //   ---------  for IN loop

for (const key in userDetails) {
  // console.log(Object[key]);
  console.log(`${key} this is detail of ${userDetails[key]}`);
}

console.log('--------------------');
for (const keys in obj){
  console.log(`the ${keys} is ${obj[keys]}`);
}

             //   ---------  for EACH loop

const subArr=['arr1','arr2','arr3','arr4','arr5']    //-- foreach loop executes the function for every element in an array.
subArr.forEach(element => {
  console.log(element);
});

subArr.forEach((item,index,element) => {     //  ------  this is used to find the key ,index and the array
  console.log(item,index,element);
});



const arrayObject=[{name:"one"},{name:"two"},{name:"three"},{name:"four"},{name:"five"}]
arrayObject.forEach((element) => {
  console.log(element.name);    //  --   it gives the values of the array
}); 


const numbers=[100,200,300,400,500]
numbers.forEach(number => {
console.log(number);
})


