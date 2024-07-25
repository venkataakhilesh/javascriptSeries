// 2. assignmnet opertores = is used to aasign value to any variable or function 
// =(equal to), +=, -=,*=,/=,**=,<=,>=
// let colour = "red"

// double equal to will check the values 
// let num = 5 !="5";
// console.log(num);//true

// triple equal to checks the value and the datatypes
// let num2 = 5 !== "5";
// let  num3 = 5 >10;
// console.log(num3);
// console.log(num2);//flase

// let x =10;
// x += 10; //x++
// x = x + 1;
// x = x - 1;
// x = x * 1;
// x = x / 1;
// x = x % 1;
// console.log(x);

// comparsion operator
// == (double equal to ), ===, !=, !==, >,<,<=,>=

// logical operator - &&(and), ||(or), !(not)
// let a= 10;
// let b= 20;
// let c= 30;

// && -when both the conditions are true then output will be true else flase 
// let result = a< b && b>c 
// flase && flase -> false 
//true and true = true 
// false and true= false
//true and flase= false
// console.log(result);

// || - any one condition should pass out of the two condition 
// let result2 = a<b ||b>c; //false or true 
// console.log(result2);


//let isnottrue = !(a<b);
// console.log(isnottrue);



   
// conditional (terminal operators)

// if(condition){


// }//else{

// }

//  let age ="18";
// let num =true;
// //  condition ? 'yes' : 'no';
//  let canvote = age >= 18?  "you can vote" : "you cannot vote";
//  console.log(canvote);
//  let obj ={
//      name : 'myname'
// }
// console.log(typeof obj);



// comdtional statments are used to perfrom different actions based on different conditions


// 1/if statement 
// 2. if else 
// 3/ if else if 
// 4. switch 



//  let age = 9;

// if(condition){
    // code will get executed

// }

// if (age >18){
    // console.log("you ar above 18 and you can vote");
// }
// else{
    // console.log("sorry you cannot vote");

// }

// const score1 = prompt("enter your score");
// const score = number (scroll);

// if(score >= 90){
//     console.log(" a grade");
// }else if (score >70){
//  console.log("b grade");
//  }else if(score >50){
//     console.log("c grade");

// }else if (score >35){
//    console.log("d grade"); 
// }else{
//     console.log(failed);
// }

// const score =90;

// switch(true){
//     case (score >=90):
//         console.log(" A grade");
//         break;
//         case (score >=70):
//           console.log(" B grade");
//           break;
//           case (scpre >=50):
//             console.log("C grade");
//             break;
//             case (score >= 35):
//                 console.log("D grade");
//                 break;
//                 default:
//                     console.log("failed");
//                     break;  
// }



function findDayOfWeek(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid input! Please enter a number between 1 and 7.";
    }
}

let dayNumber = parseInt(prompt("Enter a number (1-7) to find the day of the week:"));
alert(findDayOfWeek(dayNumber));




