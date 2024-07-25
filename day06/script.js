// for, while and do while 

// for in loop : interates over the properties of the Object...

// for (variable in object){
    
// }

const person ={
    firstName :"john",
    lastName :"cena",
    age : 48,

};

for (let key in person){
    console.log(`${key}: ${person[key]}`);
}

//merge two objects onto a new object 
const obj1 = { a:1 , b:3};
const  obj2 = { a:2, b:5, c:2, d:8};


// object is reference type 

let mergedobj1 = {};
for (let key in obj1) {
    mergedobj1[key] = obj1[key];
    
}
let mergedobj = {};
for (let key in obj2) {
    mergedobj[key] = obj2[key];
    
}
let mergedobj2 = { ...obj1,...obj2}
console.log(mergedobj2);





// for of loop iterates over the porperties of iteration like array and object ... 


// let number = [1,2,3,4,5];

// console.log(numbers);

// for (const numbner of number) {
//     console.log(number);
// }

// using for of 

let language = "javascript";

for (const lang of language) {
    console.log(lang);
    
}

// print all the keys and values of the following object 

const car = { brand: "mahindra", model: "thar",year:2023};

for (vehicle in car){
    console.log(`${vehicle}: ${car[vehicle]} `);
}


//.....................................................................................................

// functions in javascript are reusable block of code that is used perform specific task ..
//function makes the code modular, readable and reusable 
//there are four ways of defining a function


// 1. function declaration
// 2. function expression
// 3. arrow functions
// 4. immeduately invoked fucntion experssion 

// 1. fucntion declaration is oldest way of definig the funlction 


// every fucntion will have fucntion name , paramater, arguments and return 

//creation of a fucntion 

// a,b are parameter which is being passed to fucntion 
function sum(a,b,c){
    // console.log(a+b);
    return a+b+c;
}


// inovation or calling of a function
console.log(sum(5,10,12));
console.log(sum(50,10,122));
console.log(sum(3,10,12));

// function experession:

// let square = fucntion (a) {
//    console.log(a*a);
// }

// square(5);


// IIFE - needs to get executed just after it is defined it is used execute something withouinterputting the global scope as it create its own scope,  it does not pollute the variable and function in global scope.

(function (name) {
     console.log("mahindra"+name+"!");
})("thar");


// questions to slove 
// 1. iterate over the properties of the  following object and print only the properties with numberic values 
// const data = {a:10,b:"hello", c:20,d:"world"};

// 2.iterate over the properties of the following object and calculate the sum of all numberic value 
// const data ={a:10, b:"hello", c:20, d:"world"};

// 3. iterate over the arry and print elements that are greater than 10
// const array =[4,13,44,3,5,55];