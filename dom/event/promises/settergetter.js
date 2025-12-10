// class annu{
//     constructor(email, password){
//         this.emai=email,
//         this.password=password
//     }
// get password(){
//     return this._password.toUpperCase()
// }
// set password(value){
//     return this._password=value
// }
// }
// const jee=new annu("a@gmail.com",'asdfdx')
// console.log(jee.password)



// lexical scope and closure

// function name(){
//     let name='annu';
//     function display(){
//         console.log(name);
//     }
// display();
// }
// annu();
// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();
///closure
function init() {
  let count; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    // use variable declared in the parent function
    count++
    console.log(count)
  }
  return displayName();
}
init();
