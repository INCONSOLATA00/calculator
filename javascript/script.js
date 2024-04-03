setInterval(()=>{
console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) 
// console.log(`currentValue ${currentValue} currentOperator ${currentOperator}`);
},100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let previousValue;
let actual_previousValue;

let currentValue = [];
let currentOperator = [];
let also_inputSum = [];

let someArray = ['-','+','/','*',];
let isPair = false;


const input_field = document.querySelector("div > input");
input_field.value = "";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);
}

let alsoInput_copy;
function arithmetic(e) {
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
currentOperator.push(previousValue);

if(alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") { console.log('000')
isPair = true;
alsoInput_copy = +alsoInput;
} 

if(inputSum > 0 && alsoInput > 0 && previousValue == "+") {
console.log('001')
determine_arithmetic(currentOperator[currentOperator.length -2]);

alsoInput = "";
input_field.value = inputSum;
isPair = false;


} else if(inputSum > 0 && alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") {
currentValue.push(alsoInput)
console.log('002')
determine_arithmetic(currentOperator[currentOperator.length -2]);

alsoInput = "";
isPair = false;
}}


const functions_delete = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {
operand_delete(e);
});

const functions_all_clear = document.querySelector(".assignment02 > button:nth-child(2)")
functions_all_clear.addEventListener('click', (e) => {
previousValue = e.target.textContent + "";
console.log('ac')

isPair = false;
alsoInput = "";
inputSum = "";
currentValue = [];
also_inputSum = [];

input_field.value = alsoInput;
});


const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {

if (inputSum == "") { console.log('reached00')
if(also_inputSum == "") {
also_inputSum.push(alsoInput_copy);
input_field.value = also_inputSum.reduce((a, b) => a + b) + also_inputSum[0];
alsoInput = +input_field.value;

} else {
also_inputSum.push(alsoInput_copy);
input_field.value = also_inputSum.reduce((a, b) => a + b) + also_inputSum[0];
alsoInput = +input_field.value;
}

} else if(previousValue !== actual_previousValue) { console.log('reached01')
console.log('equals')
determine_arithmetic(currentOperator[0]) // 0 may be dynamic*
input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) {
console.log('equals')

if(currentValue.length <= 1) { console.log('0001')
inputSum += +currentValue[0];
input_field.value =  inputSum;

} else if (currentValue.length > 1) { console.log('0002')
inputSum += +currentValue[currentValue.length -1];
input_field.value =  inputSum;
}}

previousValue = e.target.textContent + "";
});

window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)};

function keyboard_input(e) {

if(isNaN(e.key) == true) {
actual_previousValue = previousValue;
previousValue = e.key + ""; 

operand_delete(e)
} else if (isPair == true){
actual_previousValue = previousValue;
previousValue = e.key;

inputSum += e.key;
input_field.value = inputSum;

} else {
actual_previousValue = previousValue;
previousValue = +e.key;

alsoInput += e.key;
input_field.value = alsoInput;}}


function operand_click(e) {
actual_previousValue = previousValue;
previousValue = +e.target.textContent;

if(previousValue == "=" && typeof actual_previousValue == "number") { console.log('runs')
functions_all_clear.click();

} else if(isPair == true) {
input_field.value = "";

inputSum += e.target.textContent;
input_field.value = inputSum;

} else {
alsoInput += e.target.textContent;
input_field.value = alsoInput;
}}

// someArray.some((opr)=> e.key == opr) == false, allow use of keyboard to enter operators. (optional features)
// include logic to do nothing if equals is pressed with no addition assignment. (needs work)*

function operand_delete(e){
console.log('delete')
if(actual_previousValue !== "=") {
if((e.key == "Backspace" && isPair == false ) || (e.target.textContent == "DEL" && isPair == false)) {

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput= +alsoInput;
input_field.value = alsoInput;

if(alsoInput == 0) {
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = "";
input_field.value = alsoInput;
}}

if((e.key == "Backspace" && isPair == true) || (e.target.textContent == "DEL" && isPair == true)) {

inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);

inputSum = +inputSum;
input_field.value = inputSum;

if(inputSum == 0) {
inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);

inputSum = "";
input_field.value = inputSum;
}}
}
}



function determine_arithmetic(value){ console.log(`value ${value}`)
switch(value) {
case "-":
return;

case "+":
inputSum = +inputSum + +alsoInput;
return;

case "/":
return;

case "*":
return;

case "=":
return;
}
}