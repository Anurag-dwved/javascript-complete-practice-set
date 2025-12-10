// class user {
//     constructor(username,email,password){
//         this.username=username;
//         this.email= email;
//         this.password= password
//     }
// encryptPassword(){
//     return `${this.password}abc`
// }
// changetheUsername(){
//     return `${this.username.toUpperCase()}`

// }
// }
// const chai =new user("anurag","ptanuarag@gmial.com",12)
// console.log(chai) 
// behind the scene 
function  User(username,email,password){
    (username,email,password)
        this.username=username;
        this.email= email;
        this.password= password
         }

     User.Prototype.encryptPassword=function(){
        return  `${this.password}abc`;

    }

    User.Prototype.changeUsername=function(){
        return `${this.username.toUpperCase()}`;
    }
 
 const chai = new User("annu","ptanuarag@gmial.com",127)
console.log(chai.encryptPassword())
console.log(chai.hangeUsername())