// 1. refer the shopping cart question Write a logic  to print  the items in th console. 
// 2.print the multipilication table for 4 form (1 to 10) ( for loop)
// 3.print all the odd numbers between 1 to 20 ( while loop)
// 4.print number form 10 to 1(do while loop)


// question no: 1

const cart = [
        {item:"apple", price:120,quantity:8},
        {item:"banana", price: 60, quantity:12},
        {item:"litich", price: 220, quantity:23},
        {item:"grapes", price: 20, quantity:2},
    ];
   for (i=0; i < cart.length; i++){
    let q =cart[i].item
     
    console.log(q);
   }

// question no :  2

let a = 4;
for (i = 0; i <= 10; i++){
    let b = a*i
    console.log("fourth table is",b);
}

// question no : 3

let x = 1;
 while (x <= 20 ){
    if (x %2!=0){
        console.log(x);
    }
    x++;
 }


//  question no: 4
let p = 10;
do {
    console.log(p);
    p--;
}while (p >= 1);


