// loops in java script :  loops are used to execute a block of code repeatadly until a specified condition is met.

// 1.for loop
// 2.while
// 3.do while
// 4. for in
// 5. for of

// 1.for loop: is
//  used when you kmow in advance how many times you want to execute the block of code

//syntex:
//for(intilization:condition;increment/decrement){}
// for (let i =1; i < 10; i++){
//     console.log(i);
// }
// for (let i = 10; i >1; i--){
//     console.log(i);
// }

// another exam of for loop(produnction level)
// array of object

//calculate the total price of items in shopping cart

//write a logic to print the items in the console....(H .W)
// const cart = [
//     {item:"apple", price:120,quantity:8},
//     {item:"banana", price: 60, quantity:12},
//     {item:"litich", price: 220, quantity:23},
//     {item:"grapes", price: 20, quantity:2},
// ];
// console.log(cart);
// let totalprice = 0;

// for(let i =0; i < cart.length;i++){
//     //totalprice += cart[i].price* cart[i].quantity;
//     totalprice= totalprice + cart[i].price * cart [i].quantity;

// }
// console.log("totalprice of fruits",totalprice);

//while loop: repeats a block of code as a long as a specified condition is true..

//while(condition){
//code to be ececuted
// }

// 1 to 10
// let i = 1;
// while (i<= 10){
//     console.log(i);
//     i++;
// }

// 10 to 1
// let i= 10;
// while (i >= 1){
//     console.log(i);
//     i--;
// }

// do while :loop  is similer to the while loop but it ensured that the code block is execuyed at least once

//syntax:
//do{
// do something at least one
// } while (condition);

// let i =10;
// do {
// console.log(i);
// i--;
// } while ( i>= 1);

//check if an array containes a specific value and if found print it in the console...
// const arr = [10, 20, 30, 40, 50];
// const valuetofind = 30;
// let index = 0;
// let found = false;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === valuetofind) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log(`${valuetofind} is found is an array`);
// } else {
//   console.log(`${valuetofind} is not found in the array`);
// }
