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


// /*

// Practice Task

// Task 1: slice()

// কাজ:

// 1. Index 1 থেকে Index 3 পর্যন্ত Element বের করো।
// 2. শেষের দুটি Color বের করো।
// 3. Index 2 থেকে শেষ পর্যন্ত Color বের করো।
// 4. Original Array Print করো।

// */

// let colors = ["Red", "Green", "Blue", "Yellow", "Black"];


// console.log(colors.slice(1, 3));

// console.log(colors.slice(-2));

// console.log(colors.slice(2));

// console.log(colors);


// /*

// Task 2: splice()

// কাজ:

// 1. Index 1 থেকে ২টি Student Delete করো।
// 2. Index 1-এ "Fahim" যোগ করো।
// 3. Index 2-এর Student-কে "Tamim" দিয়ে Replace করো।
// 4. Final Array Print করো।
// 5. Array Length Print করো।

// */

// let students = ["Rahim", "Karim", "Sakib", "Nayeem", "Hasan"];

// students.splice(1, 2);

// console.log(students);

// students.splice(1, 0, "Fahim");

// console.log(students);

// students.splice(2, 1, "Tamim");

// console.log(students);

// console.log(students.length)



// /*

// Task 3: Challenge

// কাজ:
// 1. slice() দিয়ে [30, 40, 50] বের করো।
// 2. splice() দিয়ে 40 এবং 50 Delete করো।
// 3. splice() দিয়ে 45 যোগ করো।
// 4. Original Array Print করো।

// */

// let numbers = [10, 20, 30, 40, 50, 60, 70];


// console.log(numbers.slice(2,5));

// numbers.splice(3,2);

// numbers.splice(3, 0, 45);

// console.log(numbers);



// /*

// Part 3: Practice Tasks

// Task 1: concat()

// 1. দুটি Array concat() দিয়ে যুক্ত করো।
// 2. নতুন Array Print করো।
// 3. Original frontend এবং backend Print করো।
// 4. মোট কয়টি Skill আছে বের করো।

// */


// let frontend = ["HTML", "CSS", "JavaScript"];
// let backend = ["Python", "Django", "PostgreSQL"];

// let newArray = frontend.concat(backend);

// console.log(newArray);

// console.log(frontend);

// console.log(backend);

// console.log(newArray.length);



// /*

// Task 2: includes()

// 1. "JavaScript" আছে কি না পরীক্ষা করো।
// 2. "Django" আছে কি না পরীক্ষা করো।
// 3. "React" আছে কি না পরীক্ষা করো।
// 4. সবগুলো Result Print করো।

// */


// let skills = ["HTML", "CSS", "JavaScript", "React", "Python"];

// console.log(skills.includes("JavaScript"));

// console.log(skills.includes("Django"));

// console.log(skills.includes("React"));


// /*

// Task 3: indexOf()

// 1. "JavaScript"-এর Index বের করো।
// 2. "Python"-এর Index বের করো।
// 3. "Django"-এর Index বের করো।
// 4. "React"-এর Index বের করো।

// */


// let subjects = ["HTML", "CSS", "JavaScript", "Python", "React"];


// console.log(subjects.indexOf("JavaScript"));

// console.log(subjects.indexOf("Python"));

// console.log(subjects.indexOf("Django"));

// console.log(subjects.indexOf("React"));



// /*

// Part 4: Mini Project — Student Management System

// Project Requirements:

// প্রথমে এই Array তৈরি করো:

// let students = ["Rahim", "Karim", "Sakib"];


// তোমার Project-এ নিচের কাজগুলো করতে হবে:

// 1. নতুন Student যোগ করতে হবে।
// 2. সব Student-এর নাম Print করতে হবে।
// 3. কোনো Student আছে কি না Search করতে হবে (includes())।
// 4. Student-এর Index খুঁজতে হবে (indexOf())।
// 5. দুটি Student List একসঙ্গে যুক্ত করতে হবে (concat())।
// 6. নির্দিষ্ট Student Delete করতে হবে (splice())।
// 7. Student List-এর Length বের করতে হবে।

// */

// let students = ["Rahim", "Karim", "Sakib"];


// // Add Student

// students.push("Nayeem");

// // Print All Student

// console.log("-------------All Students------------")

// for (let i = 0; i < students.length; i++)

//     console.log(students[i]);


// // Search Students

// let search = students.includes("Karim");

// console.log("Search Students: " + search);

// // Index of Student

// let indexStudent = students.indexOf("Rahim");

// console.log("Index Students: " + indexStudent);


// // Add More Students

// let newStudents = ["Habib", "Rakib"];

// let newStudentsList = students.concat(newStudents);

// console.log("New Students List: " + newStudentsList);

// // Delete Specific Student

// newStudentsList.splice(3, 1);

// // Length of newStudentList

// console.log(newStudentsList.length);

let products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse"
];

// 1. নতুন Product যোগ করো

products.push("Computer");

// 2. একটি Product Remove করো

products.pop();

// 3. Product আছে কি না পরীক্ষা করো

console.log(products.includes("Computer"));

// 4. Product-এর Index বের করো

console.log(products.indexOf("Mobile"));

// 5. প্রথম দুটি Product আলাদা করো

console.log(products.slice(1, 3));

// 6. Final List Print করো

console.log(products)


// // Practice Task 1
// // নিচের Array থেকে প্রথম ৫০-এর বেশি সংখ্যা খুঁজে বের করো।

// let numbers = [12, 25, 45, 60, 75, 90];

// const findNumber = numbers.find(num => num > 50);

// console.log(findNumber);


// // Practice Task 2
// // নিচের Array থেকে ৫০-এর বেশি সব সংখ্যা বের করো।

// let numbers = [12, 25, 45, 60, 75, 90];

// const filterNumbers = numbers.filter(num => num > 50);

// console.log(filterNumbers)


// // Practice Task 3
// // প্রতিটি সংখ্যার সঙ্গে ১০ যোগ করে নতুন Array তৈরি করো।


// let numbers = [5, 10, 15, 20];

// const addNumbers = numbers.map(num => {
//     return num + 10
// });

// console.log(addNumbers);



/*

আজকের Mini Challenge: Student Management System

এই তিনটি Method ব্যবহার করে নিচের কাজগুলো করো:


Task 1: find() ব্যবহার করে প্রথম ২০ বা তার বেশি বয়সী Student খুঁজে বের করো।

Task 2: filter() ব্যবহার করে ২০ বা তার বেশি বয়সী সব Student বের করো।

Task 3: map() ব্যবহার করে শুধু Student-দের নাম নিয়ে নতুন Array তৈরি করো।

*/

let students = [
    { name: "Rahim", age: 18 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 20 },
    { name: "Nayeem", age: 25 },
    { name: "Habib", age: 16 }
];


const findAge = students.find(student => {

    return student.age > 20
});

console.log(findAge);


const filterAge = students.filter(student => student.age > 20);

console.log(filterAge);

const mapName = students.map(student => student.name);

console.log(mapName);


// Task 1:
// ২০ বছরের কম বয়সী সব Student বের করো।

const filterBelow20 = students.filter(student => student.age < 20);

console.log(filterBelow20);

// Task 2:
// প্রথম ২০ বছরের কম বয়সী Student খুঁজে বের করো।

const findBelow20 = students.find(student => student.age < 20);

console.log(findBelow20)

// Task 3:
// প্রত্যেক Student-এর নামের সঙ্গে " - Student" যোগ করে
// নতুন Array তৈরি করো। 

const addStudentExtension = students.map(student => {

    return student.name + " - Student"
});

console.log(addStudentExtension);


