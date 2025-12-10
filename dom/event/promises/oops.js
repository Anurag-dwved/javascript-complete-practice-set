// const user ={
//     username:'annu',
//     loginCount:8,
//     signedIN:true,
//     getuserDtail:function(){
//         console.log("got user detail from text file")
//     }
// }

// console.log(user.username)
// console.log(user.getuserDtail())\
//constructor function
//const promiseone = new promise()
//new keyword is a constructor function this allow i make different different instances of one object
function user(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount=logincount;
    this.isLoggedIn= isLoggedIn
    return this
}
const usertwo =  new user("faizal",13, 'no')
const userone = new user("annu",10, 'yes')
console.log(usertwo)   
//&**new***
//when i created new keyword firstly create empty object
function SubmitEvent(num){
return num+5
}
SubmitEvent.power =5
console.log(SubmitEvent(5))
console.log(SubmitEvent.power)
console.log(SubmitEvent.prototype)

function createUser(username, score){
    this.username = username
    this.score=score

}
createUser.prototype.increment =function(){
    this.score++
}
createUser.prototype.printme=function(){
    console.log(`price is  ${this.score}`);
}
 const chai = new createUser("chai",24)
 const tea  = new createUser("tea",90)
 chai.printme()

