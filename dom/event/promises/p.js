const promiseOne =new Promise(function(resolve,reject){
setTimeout(function(){
console.log('async task is complete');
resolve()

},1000)

})
promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2")
    },1000)-
    resolve()
}).then(function(){
    console.log("asnc task 2 resolve")
})

const promisThree= new Promise(function(resolve, reject){
  // resolve direct conected with then
  setTimeout(function(){
    resolve({username:'annu', email:'annu@gmail.com'})
  },1000)
 
})
  promisThree.then(function(user){
console.log(user)
   })



  const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"annuu",pass:"jay"})

        }
        else{
            reject('something went wrong')
        }

    },1000)
  }) 
promiseFour.then((user)=> {
//callback hell
console.log(user);
return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
console.log(error);
}).finally(function(){
    console.log('the promise either resolve or rejected')
})



 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({subject:"javascript",pass:"jay"})

        }
        else{
            reject('js went wrong')
        }

    },1000)
  }) 
  async function consumePromiseFive(){
   try {
     const response=await promiseFive
      console.log(response)
   } catch (error) {
    console.log(error);
   }
  }
   consumePromiseFive()