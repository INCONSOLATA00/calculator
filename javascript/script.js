setInterval(()=>{console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} `) },100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let previousValue;
let actual_previousValue;
let currentValue = [];
let also_alsoInput;

let someArray = ['-','+','/','*',];
let isPair = false;


const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);
}

function arithmetic(e) {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
currentValue.push(previousValue);

if(alsoInput > 0) {
isPair = true;

} if(inputSum > 0 && alsoInput > 0) {
inputSum = +inputSum + +alsoInput;

alsoInput = "";
isPair = false;

} if(isPair == true && alsoInput == "") {
isPair = false;
};}


const functions_delete = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";

console.log('delete')
operand_delete(e);
});

const functions_all_clear = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('ac')

isPair = false;
alsoInput = "";
inputSum = "";

input_field.value = alsoInput;
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {
// console.log(`check integrity ${alsoInput + inputSum}`) // inputSum == NaN (likely still string from see add)
actual_previousValue = previousValue;                                 // determine_arithmetic(currentValue.filter((iteration) => someArray.includes(iteration)).toString());
previousValue = e.target.textContent + "";
console.log('equals')

console.log(`previousValue ${typeof previousValue} actual_previousValue ${typeof actual_previousValue}`)
if(previousValue !== actual_previousValue) { console.log('reached01') // previousValue !== actual_previousValue, something error @ previous also*
inputSum = +inputSum + +alsoInput; 
also_alsoInput = +alsoInput;

input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) { console.log('reached02')
input_field.value = inputSum += also_alsoInput;
}});

window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)};

function keyboard_input(e) {
operand_delete(e)

// --------------------------------

if(isNaN(e.key) == true) {
} else if (isPair == true){
input_field.value = "";
inputSum += e.key
input_field.value = inputSum;

} else {
alsoInput += e.key
input_field.value = alsoInput;}}

function operand_click(e) {
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";

if(isPair == true) {
input_field.value = "";

inputSum += e.target.textContent;
input_field.value = inputSum;

} else {
alsoInput += e.target.textContent;
input_field.value = alsoInput;
}}

// someArray.some((opr)=> e.key == opr) == false, allow use of keyboard to enter operators*

function operand_delete(e){
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('delete')

if(e.key == "Backspace" || isPair == false) {
alsoInput = alsoInput + "";

if(isPair == false && alsoInput > 0) {

alsoInput = alsoInput.slice(0, alsoInput.length -1);
alsoInput = +alsoInput;
input_field.value = alsoInput;}

if (isPair == false && alsoInput == "0") {

alsoInput = "";
input_field.value = alsoInput;}}

if(e.key == "Backspace" || isPair == true) {
inputSum = inputSum + "";

if(isPair == true && inputSum.length > 0) {

inputSum = inputSum.slice(0, inputSum.length -1);
inputSum = +inputSum;
input_field.value = inputSum;}

if(isPair == true && inputSum == "0") {

inputSum = "";
input_field.value = inputSum;
}}}


function determine_arithmetic(value){
switch(value) {
case "-":
alsoInput = +inputSum - +alsoInput;
return;

case "+":
alsoInput = +inputSum + +alsoInput;
return;

case "/":
alsoInput = +inputSum / +alsoInput;
return;

case "*":
alsoInput = +inputSum * +alsoInput;
return;
}
}
