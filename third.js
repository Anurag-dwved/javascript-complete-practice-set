// Functions are fundamental building blocks in all programming.
// Functions are reusable block of code designed to perform a particular task.
// // Functions are executed when they are "called" or "invoked".
// function myFunction(p1, p2) {
//  let result  = p1*p2
//  return result

// const { forwardRef } = require("react");

    
// }                          
// const result = myFunction(2,5)
// console.log("result will be : " ,result)
// function loginUserMessage(username){
//     if(username=== undefined){
//         console.log("Please enter the username :")
//     }
//     else
//         console.log("welcome to the my page ")
//     return `${username} just logged in `
// }
// console.log (loginUserMessage('Akash'))

// // rest operator
// function storesomeAmmmoun(...num2){//this rset operator not spread operator 
//     return num2
// }
// console.log(storesomeAmmmoun(200,400,500))


// function storesomeAmmmount(val1,val2,...num1){//this rset operator not spread operator 
//     return num1
// }
// console.log(storesomeAmmmount(200,400,500))
//global and local scope 
 //=> carlybraces like as a scope    
//  Scope = Visibility
// Scope determines the accessibility (visibility) of variables.
// JavaScript variables have 3 types of scope:
// Global scope
// Function scope
// Block scope

//  let x = 5;
// function myfunc() {
//   x = 3;
// }
// myfunc();
// alert(x);
// let a= 300 // global scope
// console.log("outside of scope", a)

//  if(true){   //this is a scop // block scope 
// let a= 90
// var b=90
//  const c = 89
//  console.log("Innerside scope", a)
//}

//  console.log(a)
//   console.log(b)
   //console.log(c)
   // Dom => doccument object Model => kaise html page ko manipulate kiya jata hai usnig of html page 
   // nested scope 
//    function one (){
//     const username =  "Anurag"
// function two(){
//     const website = " youtube "
//     console.log(username )
//     console.log(website)
// }

// two()
//    }
// one()
// // function add() {
//   let counter = 0;
//   function plus() {counter += 1;}
//   plus();   
//   return counter;
// }
// add()
// function myCounter() {
//   let counter = 0;
//   return function() {
//     counter++;
//     return counter;
//   };
// }
// const add = myCounter();
// console.log(add(),
// add(),
// add()
// )



// arrow function =>  this keyword tells the correct context
// const user = {
//     username: "Anurag Dwivedi",
//     price: 999,
//     welcomemessage:function(){
//         console.log(`${this.username} , welcom to website `)
//         //console.log(this)
//     }
// //this keywors make current context

// }
// user.welcomemessage()// this is method 
// user.username = "Ashutosh"
// user.welcomemessage()
// const chai = ()=>{
//     let username = "annu"
//     console.log(this.username);
// }

// chai()
// explicit return 
// const addtwo = (num1, num2)=>{
// return num1+num2
// }
// console.log(addtwo(4,3))
// implicit return 
// const addtwo = (num1, num2)=> num1+num2

// console.log(addtwo(4,3))
//immediately invoked functions expressions (iife)
// global scope ke pollutions se problem hoti hai kai bar uske pollution ko hatane ke liye iife ka use karte hai
// (function chai (){
//     console.log(`my name is anurag dwivedi` );
// })
// ()
//  const a= ()=>{
//     name ="Anurag ";
//    console.timeLog(name);
//  }
//  a()
 //java execution context
//  control flow or logic flow
// const person = {
//     username: "Anurg"
// };

// if (person.username === "Anurag") {
//     console.log(`${person.username} this is rigth name `);
// } else {
//     console.log(`${person.username}, please enter the right name.`);
// }

// const balance = 1000
// if(balance <89 ){
//     console.log('less')

// }
// else {
//     console.log('greater then ')
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInfromgoogle = false
// const loggedInfrommail = true
// if(userLoggedIn && debitCard && loggedInfromgoogle ){
//     console.log("allow to buy course ");
// }
// else {
//     console.log(`please follow the instructions `)
// }
// if ( loggedInfromgoogle ||   loggedInfrommail){
//     console.log(`login successfully`)
// }
// const month = "march"
// switch(month){
//     case "jan": 
//     console.log("january");
//     break;
//      case "feb": 
//     console.log("february");
//     break;
//      case "march": 
//     console.log("march");
//     break;
//      case "april": 
//     console.log("april");
//     break;
//      case "may": 
//     console.log("may");
//     break;
//      case "june": 
//     console.log("june");
//     break;
//      case "july": 
//     console.log("july");
//     break;
//      case "august": 
//     console.log("august");
//     break;
//      case "setember": 
//     console.log("setember");
//     break;
//      case "october": 
//     console.log("october");
//     break;
//      case "november": 
//     console.log("november");
//     break;
//      case "december": 
//     console.log("december");
//     break;
// }
// const emptyobj = {}
// if (object.keys(emptyobj).length ===empty){
//     console.log("object is empty");
// }
//Nullish coalescing operator(??)
// let val1;
// val1 = null ?? 10
// // val1 = 5 ?? 1
// console.log(val1);
// 
// const array =10
// for (let index = 0; index < 10; index++) {
//     var sum =0
//     array+sum
//     }
// console.log(array)
// for(let i = 0; i<=10; i++){
//     //console.log(`external loop ${i}`)
//     for(let j =0; j<=10; j++){
//         //  console.log(`internal loop ${j}`)
//         console.log(i+'*'+j+ '='+ i*j);
   
//     }
// }

// const array = [12,232,4,5,6,22]
// const size = 6;
// for(let i = 0; i<size; i++){
//  console.log(array[i])
//  console.log(array.size)
// }

// for(let i = 1 ; i<= 20; i++){
//     console.log(`value of index is ${i}`)
//     if(i == 5){
//         console.log("detected value of 5")
//      break;
//     }
// }
// while(2!==2){
//     console.log("correct ")

// }
// console.log("this is not correct ")
// const arr = [1,2,3,4,5,7,8,90,]
// for (const element of arr) {
//     console.log(element)
// }
//*******important ***********/
//  const greetings = " welcome toe my name channel" 
// for (greet of greetings) {
//     console.log(`each charector is : ${greet}`)
    
// }
const map = new Map()
map.set('ind', 'india')
map.set('usa',"united states of america ")
map.set ('USA', "united states of america")
console.log(map);
for (const [key,value] of map) {
    console.log(key,' ',value)
}
// const myobj ={
//    name: "Anurag " ,
//    fullname: "Anurag dwivedi",
//    age: 32,
//    email: "ptanuragdwivedi",

// }
// for (const key in myobj) {
//   console.log(`my keys is : ${key} and their values is : ${myobj[key]} `);
// const programming = ["js",' rb','java', 'cpp']
// for (const key in programming ) {
//     console.log(programming[key]);
    
// }
// *****imp******
// const coding  = ["js",' rb','java', 'cpp']
// coding.forEach( (item, index, arr)=>{ 
//     console.log(item, index, arr);
// })
// *******IMP))))))*********

// const myCoding =[
//     {
//         langaugeName:"javascript",
//         frontent: " html "
//     },
//      {
//         langaugeName:"cpp",
//         frontent: " canva "
//     },
//      {
//         langaugeName:"css",
//         frontent: " Django "
//     },
// ]
// myCoding.forEach((item )=>{
//     console.log(item. langaugeName)
// } )
///filter 
// const arr= [1,23,2,1,3,4,5,4,6,4,3,44,6,4]
// const newNums = arr.filter((nums)=> nums >4)
// console.log(newNums);
// const panjab = arr.filter((nums)=>{
//     return nums>4
// })
// console.log(panjab);
const arr = [{
title: 'Book One', genre: 'history', publish: 1998,
Edition: 1995

},
{title: 'Book Two', genre: 'biology', publish: 1997,
Edition: 1994

},
{title: 'Book Three', genre: 'math', publish: 1994,
Edition: 1994

},
{title: 'Book Four', genre: 'english', publish: 1993,
Edition: 1995

},
{title: 'Book Five', genre: 'physics', publish: 1995,
Edition: 1995
},
{title: 'Book Six', genre: 'chemistry', publish: 1994,
Edition: 1995
},
{title: 'Book Seven', genre: 'psycology', publish: 1995,
Edition: 1994

},
{title: 'Book Eight', genre: 'social science', publish: 1996,
Edition: 1993

},
{title: 'Book Nine', genre: 'advance math', publish: 1998,
Edition: 1991

},
{title: 'Book 10', genre: 'aptitute', publish: 1999,
Edition: 1992

},
]
// arr.forEach((genre, title, publish)=> {
//     console.log(genre, title, publish)
// }
// )
// let arr1 = arr.filter((bk) => bk.genre ==='history')
//  arr1 = arr.filter((bk)=>{return bk.publish>=1995})
// console.log(arr1)
//map callback function 
// const myNumbers = [1,2,3,4,56,7]
// const result=myNumbers
// .map((num)=> num*10)
// .map((num)=> num+10)
// .filter((num)=> num>=40)
// console.log(result)
const array1 =[1,2,34,4];
const s= 0;
const c = array1.reduce(
    (a, b)=>a+b,s
);
console.log(c)
