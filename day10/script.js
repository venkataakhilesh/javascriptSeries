// 1. Suppose you have a number 121 you have to check if it is palindrome or not..
// madam -> madam, anna - anna, kick - kcik

// 2. const array1 = ['tomato', 'potato', 'ginger']
// add 'cabbage' to the first index and 'brinjal' to the last of the array...

// 3. const student = {
//     name : 'Mahesh Babu',
//     age : 48,
//     isActor : true,
// }

// you have to add a property for 'industry : tollywood', to this object...

// ------------------------------------------------------------------------------------------------------------

//array methods

// array is collection of multiple dat type as data where we can store them under one variable 

// let sports = new Array();

// sports[0] = "football";
// sports[1] = "cricket";
// sports[2] = "basketball";
// sports[3] = "volleyball";
// sports[5] = "hockey";
// console.log(sports);



// let fruits = ["orange","apple","banana"];

// push and pop 
// push add one or more element at the end of the array 
// pop removes one or more element fromt the end of the array 

// fruits.push("graphes");
// console.log(fruits);


// fruits.pop();
// fruits.pop();
// console.log(fruits);


// shift and unshift 

// unshift is used to add an element to the first index of the array 

// fruits.unshift("mango");
// console.log(fruits);

// shift is used to remove an element from the first index of the Array 

// fruits.shift();
// console.log(fruits);

//creata and array of numbers add and remove first and last element form the array

// let numbers =[ 1,2,3,4,5,6,7,8];
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.push(9);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);


//slice : return a shallow  copy  of the array

// let numericals =[1,3,5,6,88,32,53];

// let slicedArray = numericals.sliced(4,7);
// console.log(slicedArray);
// console.log(numericals);

//map , filters and reduce (react) -ES6 version

// let veggies = ["brinjal","potato","tomato","ladyfringers","carrot"];

// veggies.map((item) => console.log(item.toUpperCase()));

// let numericals =[1,3,5,6,88,32,53];

// let multiplied = numbers.map((item)=> item*2);
// console.log(multiplied);

//filter:

let numbers =[1,3,5,6,88,32,53];

let even =numbers.filter((item)=> item % 2 ===0);
let odd =numbers.filter((item)=> item % 2 !==0);
console.log(even);
console.log(numbers);



