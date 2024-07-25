// question no 1:
var name = "akhilesh";
var age =23;
var isstudent=true;
console.log(name,age,isstudent);

// answer:
// akhilesh 23 true 

// question no 2:
// area and perimeter of a rectangle 

let length =10
let width = 20


let area =length*width

let perimeter = 2*(length+width);
console.log(area);
console.log(perimeter);

// answer:
// 200
// 60


//question no 3 :

var greeting = "Hello," 
var userName = "abhi"

var welomeMessage = greeting+userName
console.log(welomeMessage);

// answer:
// hello,abhi

// question no 4:
// type conversion

var stringNumber ="123"
var convertedNumber =Number(stringNumber)

console.log(typeof(stringNumber));
console.log(typeof(convertedNumber));

// answer:
// string
// number


//question no 5 :

 let a = 4;
 const b = 4;
 console.log(a == b);//true
 console.log(a === b );//true
 console.log(a != b);// false
 console.log(a !== b);// false
 console.log(a > b);// false
 console.log(a < b);// false
 console.log(a >= b);// true
 console.log(a <= b);// true



// question no-6


// issunny=Boolean(prompt("enter the true or false"))
// isweekend=Boolean(prompt("enter the true or false"))
// hashomework=Boolean(prompt("enter the true or false"))

// or
issunny=prompt("enter the true or false")
isweekend=prompt("enter the true or false")
hashomework=prompt("enter the true or false")


if(issunny=="true" && isweekend=="true"){
    if(hashomework=="true"){
    console.log("you can play and have a blast")
}}
else{

console.log("you should study well no playing")
}




// Question No-7



let temperature=prompt("enter the temperature in numbers")

if(temperature>30){
    let weather="hot";
    console.log(`weather is ${weather} `)
}
else {
    let weather="cool";
    console.log(`weather is ${weather} `)
}

// Question no- 8


let name1 = "Guruprasad";
let x = 10;
let g = true;
let obj = {
    name: "Guruprasad",
    age : 25
}
let y;
console.log(y);
console.log(typeof(name1));
console.log(typeof(x));
console.log(typeof(g));
console.log(typeof(obj));
console.log(typeof(y));

//Question 9
let a1 = parseInt(prompt("Enter the number"));
let operator = prompt("Enter +, -, *, /");
let a2 = parseInt(prompt("Enter the number"));

if(operator == '+'){
    let A = a1 + a2;
    console.log(A);
}
else if(operator == '-'){
    let B = a1 - a2;
    console.log(B);
}
else if(operator == '*'){
    let C = a1 * a2;
    console.log(C);
}
else if(operator == '/'){
    let D = a1 / a2;
    console.log(D);
}
else{
    console.log("Invalid operator entered");
}
