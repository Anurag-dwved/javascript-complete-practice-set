//type conversion
//  let score = false
// console.log(typeof  score)
// console.log(typeof(score ))
// let a = Number(score)
// console.log(typeof (a))
// console.log(a)
// let value =3
// let a = -value 
// console.log(a)
// let str1 =" Annu"
// let str2 = " dwivedi "
// console.log(str1 + str2)
// // comparision 
// console.log(null=0);
// console.log(null==0);
// console.log(null>=0);
 // strick check means === check this is not check the values this also check the  data type 
 // primitive datatype 7 type  this is all call by value 
//  String 
//  number 
//  boolean 
//  null
//  undefined
//  symbol basically use for  make unique any value 
//  bigInt 

// const { useTransition } = require("react")

// second is reference type non primitive 
// 1. array
// 2. objects 
// 3. functions

// const heros = ["abhay ","jaapan","nanitaal"]
// let myObj={
//     name: "hetesh",
//     age: 22,

// }
// function fistFunction() {
//     console.log("hello this is my first function");
// }

// two types of memory no 1  is STACK this will conatin the  data premetive type like boolean, number , bigInt  and second is heap this will conatin the data non-primitype like Arrya and objects and functions 


//string 
// const name  ="annu";
// const repo =  50;
// console.log (`hello my name is ${name} and my repo is ${repo}`);
// const gameName =new String ('anurag ')
// console.log(gameName.substring (-6,2))
// // numberand math
// const score = 400
// console.log(score);
// const balance = new Number(400)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toString())

// //precision method and toLocalString method ,abs method , 
// //round basically use for correct value like 4.5 this will be 5 
// // if i use the round method one other method used for like if i want to  upper value of given value i using ceil method   
// //and if i want to lower value i have been using FLOOR method. for example i using 5.4 this will be 5
// const otherNumber =10000000
// console.log(otherNumber.toPrecision(6));
// console.log(otherNumber.toLocaleString());
// console.log(Math)
// console.log(Math.abs(-9));
// console.log(Math.ceil(9.6));
// console.log(Math.floor(9.6));
//     function greet(name) {
//       console.log("Hello, " + name + "!");
//     }
//     greet("Alice"); // Invoking the function
//         greet("Bob");
//     greet("Charlie");
//      const person = {
//       name: "David",
//       greet: function() {
//         console.log("Hello, " + this.name + "!");
//       }
//     };
//     person.greet("annu"); // 'this' refers to 'person'

// const annu  = ["nakul ", "sahadev", "jasprit ", "bumraha"];
// console.log(annu[2]);
// let array= [2,5,6789,55,56,9,];
// console.log(Math.min(1,35,7,889,9,7,65))
// console.log(Math.max(1,35,7,889,9,7,65))
// console.log(Math.random())
// console.log((Math.random()*10+1));
// let min =20

// let max=30 
// console.log(Math.floor(Math.random()*(max-min+1)+min))

/// *********_____date____************** 
// let myDate =new  Date()
// console.log(myDate.toString())
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

//********____array______*******
// let array = [1,2,4,57,8,99]
// console.log(array[0])
// array.push(10)
// array.unshift(678)
// array.shift()
// console.log(array.includes(90))
// console.log(array.includes(99))
// console.log(array.indexOf(90))
// console.log(array.indexOf(99))
// console.log("type of array before change the array is :" ,typeof array)
// const newarray = array.join()
// console.log("after change the array", typeof newaaray)
// console.log("A" ,array)
// const myn1 = array.slice(1, 3)
// console.log("B",myn1)
// const myn2 = array.splice(1, 3)
// console.log("c",myn2)



// let n1 =[1,2,3467,'anurag','jay ','dixit', 'parul']
// let n2 = ['jatin','prakash', 'pankaj', 'abahy']
// n1.push(n2)
// console.log(n1)
//console.log(n1[6])
// const addarray= n2.concat(n1)
// console.log(addarray)
// const spread = [...n1,...n2]
// console.log(spread)
// const arr1 = [1,2,34,[56,566,44,6],5,65,4,[65,654,65,4,4,3,[7,68667,]]]
// const arr2 = arr1.flat(Infinity)
// console.log(arr2)
// console.log(Array.isArray("anurag"))
// console.log(Array.from("anurag"));
// let ar1 = 90
// let ar2 = 45
// let ar3 = 54
// let ar4 = 987
// console.log(Array.of(ar1,ar2,ar3,ar4))

//****************************Objects******************************************* */
//sigleto object//iterals , combination of key and values
// syntax of create object 
// Object.create // syntax of craete object  the using constructor 
// const mysbm = ("key1")
// const jsUser = {
//     name:'Anurag',
//     Age: '22',
//     loction: 'jaipur',
//     email: ' annu@gmail.com',
//     'full name' : 'Anurag Dwivedi',
//    [ mysbm]: 'mykey1'


// }
// console.log(jsUser["email"])
// console.log(jsUser.email)
// console.log(jsUser['full name'])
// console.log(jsUser [mysbm])
// jsUser.age = 29
// Object.freeze(jsUser)//after used freed methos i can not change the object value 
// jsUser.email = "ptanuragdwivedi@gmail.com"
// console.log(jsUser);


// jsUser.greeting = Function();{           
//     console.log("hello dear bro !")
// }
// console.log(jsUser.greeting)


//boject singleton 
// const  tinderUser = {}
// tinderUser.id = "12345678"
// tinderUser.name = "Anurag"
// tinderUser.isLoggedIn = false
// console.log(tinderUser);
// const regularUser={
// name: "jay jji",
// email: "ptsanjay@gmail.com",
// fullname: {
// userFullname:{
//     firstName: " anupam",
//     lastName : "pandit",
// }
// }
// }
// console.log(regularUser.fullname.userFullname.firstName)
//  const arr1 = [ "a", "b", "c"]
//  const arr2 = ["d", "e","f"]
//  const arr3 = arr1.concat(arr2)
//  console.log(arr3)
 
// const arr5 = { 1: "a", 2: "b", 3:"c"}
//  const arr6 = {4:"d",5: "e",6: "f"}
// //  const arr7 = Object.assign ({},arr5,arr6)
// const obj3 = {...arr5 ,...arr6} 
// console.log(obj3)
// const users = [
//     {
// id: 1, 
// email: "ptannudwivedi@gmail.com",


//     },
//     {
// id: 1, 
// email: "ptannudwivedi@gmail.com",


//     },
//     {
// id: 1, 
// email: "ptannudwivedi@gmail.com",


//     },
//     {
// id: 1, 
// email: "ptannudwivedi@gmail.com",


//     },
//     {
// id: 1, 
// email: "ptannudwivedi@gmail.com",


//     },
// ]
// // users[1].email
// console.log(Object.keys(boj3));
// // console.log(Object.values(users));
// // console.log(Object.entries(users));
// const newUser = {
//     id: 2121,
//     name: "Anuj",
//     age: 22,
//     email: "ptanuaj@gmail.com",


// };
// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))
// console.log(Object.entries(newUser))
// console.log(newUser.hasOwnProperty('email'))
// console.log(newUser.hasOwnProperty('isemail'))
// object destructuring
const course = {
    courseName: "javacsript",
    price: " free",
    totalTime:" 65h",
    section:3
    
}
console.log(course.price)
const {totalTime}= course
console.log(totalTime)
const {totalTime:annu}= course
console.log(annu)
// functions and scope s
                                                      