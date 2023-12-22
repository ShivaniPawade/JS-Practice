
//            ===================        F I L T E R       ===================

// if you use {scope} in arrow function then the keyword return is used other wise it will not print anything

// and the same goes with not using the scope we dont need to use return 

const number=[1,2,3,4,5,6,7,8,9,10]
let newNumbers=number.filter((num)=>num>4)    //  ---- filter is basically used to get the new data after applying certain condition
    console.log(newNumbers);

const newNumber=[] 
number.forEach((element) => {
    if(element>5){
        newNumber.push(element);
    }
});   
console.log(newNumber);

const dummyData=[

	{color: "red",name: "#f00"},
	{color: "green",name: "#00f"},
    {color: "green",name: "#0f0"},
    {color: "green",name: "#0f0"},
	{color: "blue",name: "#00f"},
	{color: "cyan",name: "#0ff"},
	{color: "magenta",name: "#f0f"},
	{color: "yellow",name: "#ff0"},
	{color: "black",name: "#000"}
]

let data=dummyData.filter((clr) => (clr.color)==="green");
 data=dummyData.filter((clr) => (clr.name)==="#0f0");
 data=dummyData.filter((clr) =>{
	return (clr.color)==="green" && (clr.name)==="#0f0"
 })
 
console.log(data);


        //                        ===========  MAP =============



const evenNumbers=[1,3,5,7,9,11]	//  ---  map returns the new array 
const evenNumber = evenNumbers.map((num)=>(num+1))
console.log(evenNumber); 
console.log(evenNumbers);   //    -- the original array is not affected

console.log('                     ');


const numbers=[1,2,3,4,5,6,7,8,9,10]    
let numb=numbers.map((num)=>(num*10))    //  ---- in single variable we can add multiple methods at a time
                .map((num)=>(num+1))
				.filter((num)=>num%3==0)
console.log(numb);

console.log('                            ');

//                 ====================     R E D U C E      ====================

const array1 = [1, 2, 3, 4,5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;                                           
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

const sum = array1.reduce((acc,current) => {acc + current,initialValue
	console.log(`acc : ${acc} and current : ${current}`);
	return acc+current;
})	
console.log(sum);

console.log("-------------------------");

const shoppingCart=[                                //  ----   for reduce shopping cart is best example
	{item:"bag",quantity:1,price:1200},
	{item:"shoe",quantity:1,price:1000},
	{item:"lipstick",quantity:3,price:500},
	{item:"pant",quantity:2,price:7000},
	{item:"wallet",quantity:3,price:500},
	{item:"shirt",quantity:5,price:5000}
]

const total=shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(total);

const filterCart=shoppingCart.filter((item)=>(item.quantity==3))   //  -----  FILTER  returns the ARRAY 
console.log(filterCart);

const findCart = shoppingCart.find((item)=>(item.price==500))    //  -----  FIND  returns the OBJECT 
console.log(findCart);

//                =================     S  O  R  T  METHOD       ==================

const sorting=[1,232,575,6546,687635,7,45,667,7]
console.log(sorting.sort());
const sortArray=sorting.sort((a,b)=>(a-b))    //   ------  it is used to sort array from asending to descending
console.log(sortArray);


const sortArray1=sorting.sort((a,b)=>(b-a))    //   ------  it is used to sort array from descending to asending
console.log(sortArray1);





 //    ---------------   SORT on mixed array   -----------------

 const mixedArray=['212',311,24,0,2,1,'3']
 console.log(mixedArray.sort());
 const sortMixedArray=mixedArray.sort((a,b)=>(a-b))
 console.log(sortMixedArray);

 const sortMixedArray1=mixedArray.sort((a,b)=>(b-a))
 console.log(sortMixedArray1);