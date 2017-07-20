let input1 = document.getElementById("1")
let input2 = document.getElementById("2")

let multiply = document.getElementById("multiply");
console.log(multiply)
multiply.addEventListener("click", function(){
  multiplication(input1.value, input2.value)
});
function multiplication(x, y){
  console.log(x * y)
return  x * y 
}

let add = document.getElementById("add");
console.log(add)
add.addEventListener("click", function(){
  addition(input1.value, input2.value)
});
function addition(x, y){
  console.log (parseInt (x) + parseInt (y))
return  x + y 
}

let subtract = document.getElementById("subtract");
console.log(subtract)
subtract.addEventListener("click", function(){
  subtraction(input1.value, input2.value)
});
function subtraction(x, y){
  console.log(x - y)
return x - y 
 }

let divide = document.getElementById("divide");
console.log(divide)
divide.addEventListener("click", function(){
  division(input1.value, input2.value)
});
function division(x, y){
  console.log(x / y)
return x / y
}


