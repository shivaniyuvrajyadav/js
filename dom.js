// dom is document object model 
// 4 pillars of dom 
// 1. selection of element 
// 2. changing HTML
// 3. Changing css
// 4. Event Listener

var a = document.querySelector("h1")
console.log(a)

// changing HTML

// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"

// 3. Changing css

var a = document.querySelector("h1")
// a.innerHTML = "hello"
a.style.color = "green"
a.style.backgroundColor = "black"

// 4. Event Listener

var a = document.querySelector("h1")
a.innerHTML = "hey"
a.addEventListener("click",function(){
  a.innerHTML = "pink black "
  a.style.color= "yellow"
  a.style.backgroundColor = "#000"
})


































