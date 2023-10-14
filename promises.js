console.log('hello')
setTimeout(function(){
    console.log("hii")
},2000)

console.log("ok")

let promise = new Promise(function(resolve,reject){
    alert("shivani")
    resolve(56)
})

console.log(promise)