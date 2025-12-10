// Math.PI=5
// console.log(Math.PI)
// const annu=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(annu)
const chai = {
name:"annu",
email:"pt@gmail.com",
roll:203,


}

// Object.defineProperty(chai,'name',{

//     writable:false,
//     enumerable:false,
//     configurable: false

// })
//console.log(Object.getOwnPropertyDescriptor(chai,"name"))
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key}`,`${value}`)
}
