// console.log("Hellow bitches");
// alert("Open the console");

// variables in javascript
// JS is a dynamically typed language
// 3 types of variables 
// var, let , const
// var and ;et are preferred
// var can be redeclared, updated,hoisted,global scope (let is preferred)
// let cannot be redeclared,hoisted,but can be updated and has block scope
// const cannot be redeclared or updated and has block scope. and always has to be initialised


// let name = "Thanos";
// let age = 69;
// const a="SUP";
// age=20;//updating let variable

// {
//     let age = "30";//age is 30 to the extent of this block scope
// }

typeof age;// gives the data type of variable

// objects are non primitive data type
// it is declared as key:value;


// const student = {
//     name:'rahul',//end with a comma not a semicolon
//     cgpa:9,
//     age:19,
// }
// console.log(student);
// console.log(student["cgpa"]);
// student["cgpa"] = student["cgpa"] + 1;
// console.log(student["cgpa"]);

//  you can operate on different datatypes

// single line comment

/*multi line 
 comment */


//  binary operators: + - * / % ** 
//  unary operators: increment and decrement

//if , else-if and else statements
// let mode = "dark";
// let color;
// if(mode == "dark") {
//     console.log("dark mode assigned");
//     color = "black"
// }

// else{
//     color = "white";
// }

// // ternary operator
// mode === "dark"?color="black":color="white";
// console.log(color);



// let num = prompt("Enter a number:");
// console.log(num);
// if(num % 5 == 0){
//     console.log("multiple of 5");
// }
// else{
//     console.log("Not a multiple of 5");
// }



// for(let i=1; i<= 10; i++){
//     console.log(i);
// }

// let sum = 0;
// // to perform a sum of n numbers
// for(let j=0; j<100; j++){  
//     sum = sum + j;
// }
// console.log(sum);




// to print all even numbers from 1 to 100

// for(let k=1; k<=100 ; k++){
//     if(k%2 == 0){
//     console.log(k);
//     }
// }



// TO make the user guess the number until its correct

// let gameNum = 69;
// let userNum = prompt("guess the number:");

// while(userNum != gameNum){
//     console.log("wrong answer, Try again");
//     userNum = prompt("wrong answer, Guess the enumber again:");
// }

// console.log("Well Done")


// let Name = prompt("enter your name:");

// let userName = `@${Name}${Name.length}`;
// console.log(userName);