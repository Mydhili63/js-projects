let num1=8
let num2=2
document.getElementById("num1-el").textContent="Num1: "+ num1
document.getElementById("num2-el").textContent="Num2: "+num2
let sUM=document.getElementById("sum-el")
function add(){
  let result=num1+num2
  sUM.textContent= "Add:" + result
  console.log(sUM)
}
let sUB=document.getElementById("sub-el")
function sub(){
  let result=num1-num2
  sUB.textContent= "Sub:" + result
  console.log(sUB)
}
let mUL=document.getElementById("mul-el")
function mul(){
  let result=num1*num2
  mUL.textContent= "Mul:" + result
  console.log(mUL)
}
let dIV=document.getElementById("div-el")
function div(){
  let result=num1/num2
  dIV.textContent= "Div:" + result
  console.log(dIV)
}