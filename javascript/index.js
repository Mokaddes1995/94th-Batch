// // Structure of JavaScript 

// // Use ; End of Line

// // This is Single Line Comments. JavaScript Comments for Use Describe Code, Disable any Logic

// /* 

// For Multiline Comments

// */


// // JavaScript Variable

// // VAR Use For Old JavaScript Version. Re-Assign Kora Jabe, Re-Declear kora jabe.

// var number = 30;

// var number = 40;

// console.log(number);

// // LET Use For Change Value. Re-Assign kora jabe but Re-Declear kora jabe na.

// let name = "Mokaddes Hossain";

//     name = "Arman";

// // let name = "Azim Uddin" // Error Disse

// console.log(name); // Print Arman

// // CONST use for Value Not Change. Re-Assign and Re-Declear kono tai kora jabe na.

// const country = "Bangladesh";

// // country = "Pakistan"  // Error Dei

// // const country = 'India' // Error Dei

// console.log(country);


// // Data Type 

// // Primitive Data Type

// // Number

// let num = 10;

// let num_1 = 10.5;

// // String

// let str_1 = "Hello World";

// let str_2 = "20";

// // Boolean

// let bool_1 = true;

// let bool_2 = false;

// // Undefine

// let x;

// // Null

// let null_data = null;


// // Symbol

// let sym = Symbol("Hello World");

// // Big Integer

// let big_int = 12345678900987765454332134556556n;

// console.log(big_int)


// // Non-Primitive Data Type

// // Array

// let arr = ["Apple", "Orange", "Banana"]

// console.log(arr)

// // Object

// let my_obj = {

//     name : "Mokaddes Hossain",
//     age : 36,
//     city : "Dhaka",
//     country : "Bangladesh" 
// }

// console.log(my_obj)


// // Function

// function check_even_odd(num){

//     if (num % 2 == 0){

//         console.log("Even Number")
//     }else {

//         console.log("Odd Number")
//     }
// }

// check_even_odd(8)


// let name_1 = "Rahim";
// let age = 20;
// let isStudent = true;
// let address;
// let salary = null;
// let fruits = ["Apple", "Mango"];
// let person = { name: "Karim" };


// console.log(typeof name_1)

// console.log(typeof age)

// console.log(typeof(isStudent))

// console.log(typeof address)

// console.log(typeof salary)

// console.log(typeof fruits)

// console.log(typeof person)

// console.log(typeof NaN)

// console.log(typeof Infinity)

// console.log(typeof function(){})

// console.log(typeof BigInt(100))

// console.log(typeof "100")

// console.log(typeof 100)


// console.log("*" * 30)

// console.log("5" == 5);
// console.log("5" === 5);

// console.log("*" * 30)

// console.log(null == undefined);
// console.log(null === undefined);

// console.log("*" * 30)

// console.log(Boolean(""));
// console.log(Boolean("false"));
// console.log(Boolean(0));
// console.log(Boolean([]));


/*

Practice Task

Task 1: slice()

কাজ:

1. Index 1 থেকে Index 3 পর্যন্ত Element বের করো।
2. শেষের দুটি Color বের করো।
3. Index 2 থেকে শেষ পর্যন্ত Color বের করো।
4. Original Array Print করো।

*/

let colors = ["Red", "Green", "Blue", "Yellow", "Black"];


console.log(colors.slice(1, 3));

console.log(colors.slice(-2));

console.log(colors.slice(2));

console.log(colors);


/*

Task 3: Challenge

কাজ:
1. slice() দিয়ে [30, 40, 50] বের করো।
2. splice() দিয়ে 40 এবং 50 Delete করো।
3. splice() দিয়ে 45 যোগ করো।
4. Original Array Print করো।

*/

let numbers = [10, 20, 30, 40, 50, 60, 70];


console.log(numbers.slice(2,5));