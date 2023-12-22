// 2) conditions       if else,       if else ladder,                 switch case, 


// I F  else statement   


const age = 18
if(age>=18){
    console.log("chill you can drive")
}
else{
    console.log("ohh srry you cannot drive")
}

// i f else if ladder 

let a=16
if(a>18){
    console.log("chill you can drive")
}
else if(a>=18){
    console.log("you can also drive")
}
else{
    console.log("ohh srry you cannot drive")
}


// s w i t c h case

const day='saturday'
switch (day) {
    case 'monday':
        console.log('its monday')
        break;
    case  'tuesday':
        console.log('its tuesdayy')
        break;
    case 'wednesday':
        console.log('its wednesday')
        break;
    case 'thursday':
        console.log('its thursday')
        break;
    case 'friday':
        console.log('its friday')
        break;
    case 'saturday':
        console.log('its saturday')
        break;

    default:
        console.log('its sunday')
        break;
}



if(a=16) console.log('yup'),  // its is known as implict code also known as a short hand property to write the conditional statement.
console.log('hurrah');

// s o m e  times we assume the statement that contains the  true values or falsy values to check the condition 

// F a l s y values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN  these all are the falsy values

// t r u t h y values 

// true, [ ], { }, "false", function name() {}, '' 



// --------------------------------------

// nullish coelscing operator (??) : null undefined

let value=10
value=10 ?? 20
value=20 ?? undefined
value=20 ?? true
console.log(value);