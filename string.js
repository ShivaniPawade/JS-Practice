//                           =====================     S T R I N G   ==========================


// string is stored as a object it can be written in two ways

const nam="shivani"
console.log(nam);

const surname=new String("Pawade")
console.log(surname);

// to concatinate the string in two methods 

console.log(nam + " " + surname);

console.log(`my name is ${nam} and my surname is ${surname}`);         //template string


// S T R I N G  METHODS

console.log(nam.length);               // L E N G T H

console.log(nam.slice(2,6));          //  S L I C E

console.log(nam.substring(1,7));      //  S U B S T R I N G

console.log(nam.toUpperCase());       //  TO  U P P E R C A S E

console.log(nam.charAt(5));           //   C H A R A T

console.log(nam.indexOf("h"));       //   I N D E X O F 

let email="shivani@gmail.com"
console.log((email.replace("@","--")));                  // it replace the value

console.log((email.includes('gmail')));                  // includes

console.log((email.split("@")));                         // split


// ================================================================================================================


                                        //   N U M B E R  and  M A T H 

number=10000                            
console.log(number.toString().length);   //length                                    

console.log(Math);
console.log(Math.abs(-9));
console.log(Math.sqrt(25));
console.log(Math.random());

const numbe= 1000000000
console.log(numbe.toLocaleString('en-In'));



// =====================================================================================================================


                                      //  D A T E  AND  D A T E


const todaysDate=new Date()                                   
console.log(todaysDate);
console.log(todaysDate.toDateString());