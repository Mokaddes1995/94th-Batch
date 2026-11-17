// // Part 1: Normal Function

// // Practice 01: greet() নামে একটি Function তৈরি করো, যেটি Console-এ Hello JavaScript প্রিন্ট করবে।

// function greet() {

//     console.log("Hello JavaScript");
// }

// greet()


// // Practice 02: দুটি Number গ্রহণ করে তাদের যোগফল Return করবে এমন একটি Function তৈরি করো।


// function add(a, b) {

//     return a + b;
// }

// console.log(add(10, 20));


// // Practice 03: একটি Number গ্রহণ করে সেটি জোড় নাকি বিজোড় তা নির্ণয় করবে।

// function evenOdd (a) {

//     if (a % 2 === 0) {

//         return "Even";

//     }else {

//         return "Odd";
//     }
// }

// console.log(evenOdd(7));


// // Practice 04: তিনটি Number গ্রহণ করে সবচেয়ে বড় Number Return করবে।

// function findMax(a, b, c) {

//     if (a >= b && a >= c) {

//         return a;

//     }else if(b >= a && b >= c) {

//         return b;

//     }else {

//         return c;
//     }
// }

// console.log(findMax(10, 50, 20))


// // Practice 05: একটি Number গ্রহণ করে তার Factorial বের করবে।

// function factorial(a) {

//     let fact = 1;

//     for (let i = 1; i <= a; i++) {

//         if (a < 1) {

//             return 1;

//         }else{

//             fact *= i;
//         } 
//     }

//     return fact;
// }

// console.log(factorial(5));


// Part 2: Function Expression


// // Practice 06: greet নামে একটি Function Expression তৈরি করো, যেটি একটি Name গ্রহণ করে Greeting দেখাবে।


// const greet = function(name) {

//     return "Hello, " + name;

// }

// console.log(greet("Mokaddes Hossain!!"))


// // Practice 07: দুটি Number গ্রহণ করে তাদের গুণফল Return করবে এমন Function Expression তৈরি করো।


// const multiply = function(a, b) {

//     return a * b;

// }

// console.log(multiply(10, 20));


// // Practice 08: একটি Number গ্রহণ করে সেটি Positive, Negative নাকি Zero তা নির্ণয় করো।

//  const checkNumber= function (a) {

//     if (a > 0) {

//         return "Positive";
        
//     }else if (a < 0) {

//         return "Negative";

//     }else {

//             return "Zero";
//     }
// }

// console.log(checkNumber(0))


// // Practice 09: একটি Array গ্রহণ করে তার সব Number-এর যোগফল Return করো।


// const add = function(arr) {

//     total = 0;

//     for (let num of arr) {

//         total += num
//     }

//     return total;
// }

// console.log(add([10,20,30,40]));


// Part 3: Arrow Function

// Practice 10: দুটি Number-এর যোগফল বের করার জন্য Arrow Function তৈরি করো।


// Use Explicit Arrow Function

const add = (a, b) => {

    return a + b;
}

console.log(add(10,20));


// Practice 11: একটি Number গ্রহণ করে তার Square বের করো।

// Use Implicit Arrow Function

const square = a =>  a * a;

console.log(square(5));


// Practice 12: একটি String গ্রহণ করে সেটির Length Return করো।

const lengthString = string => string.length;

console.log(lengthString("Hello"));


// Practice 13: একটি Number গ্রহণ করে সেটি 18-এর বেশি বা সমান কি না পরীক্ষা করো।

// Use Explicit Arrow Function

const checkNumber = num => {

    if (num > 18) {

        return "Greater Than 18";

    }else if(num === 18){

        return "Equal 18";

    }else {

        return "Less Than 18"
    }
}

console.log(checkNumber(18))


// Practice 14: একটি Array গ্রহণ করে তার সব Number-এর গড় (Average) বের করো।


const sumArr = arr => {

    let total = 0;

    for(let num of arr) {

        total += num;
    };

    average = total/arr.length

    return average;
};


console.log(sumArr([10,20]))







