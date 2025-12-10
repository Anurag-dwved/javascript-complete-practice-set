class user{
    constructor(username, password){
        this.username=username
        this.password=password
    }
logMe(){
    console.log(`Usernameis${this.username} `);
}
}
class teacher extends user{
    constructor(username,password,gmail, id, number){
        super(username);
        super(password);
        this.gmail=gmail;
        this.id=id;
        this.number=number
    }
}
const chai = new user("pawan",123,"pawan@gmail.com",2,8755884645);
console.log(chai)