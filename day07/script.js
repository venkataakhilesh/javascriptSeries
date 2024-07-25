// 3. arrow functions

//es5 vs es6
// var / let and const
//arrow fucntions in es6 
// arrow fucntion: it has been interoduced in es6 version =2015 
// ti is advance or modular  way of writing javascript fucntion , it more readable

//syntex
//() =>
// {

// }
//()

const data = (name, age) =>{
    console.log(`my name is ${name} and age is ${age}`);
};

data("john",30);


// 1. create a function which take number as a paramater and return true if the number is even else false if it is add
   
function func (a){
    if (a%2==0){
        return true
    }
    else{
        return false
    }
}

a=parseInt(prompt("enter the number"))
b=func(a)
console.log(b);


// 2. creat a function which takes paramater celsius and converts in to fahrenheit and print it on the console.


function conversion(degree){
    //F = (9/5)C + 32;
    //console.log(degree);
    return   (9/5)*degree + 32 
}
  b= conversion(45);
console.log(b);

// 3. creata a fucntion which takes number as parameter and returns the cube of number 

const cube = function(akhil){
    let c =  akhil*akhil*akhil;
    
    console.log(`cube of ${akhil} is ${c}`);
}
cube(5);



