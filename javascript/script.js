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
let isKeyboard = false;


const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);
}

function arithmetic(e) {
actual_previousValue = previousValue;
previousValue = e.target.textContent + ""; // SEE HERE, ONLY PASSES OPERATORS, NOT NUMBERS

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

isKeyboard = false;
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
console.log('equals')

if(previousValue !== actual_previousValue) { console.log('reached01')
inputSum = +inputSum + +alsoInput;
also_alsoInput = +alsoInput;

input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) { console.log('reached02') // the last value being assigned is not a number* && // does not contain numerical values; check push statement*
inputSum += +currentValue[currentValue.length -1]
input_field.value =  inputSum;
}

actual_previousValue = previousValue;                      
previousValue = e.target.textContent + "";
});

window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)};

function keyboard_input(e) {

isKeyboard = true;
operand_delete(e)

// --------------------------------

if(isNaN(e.key) == true) {
} else if (isPair == true){
actual_previousValue = previousValue;
previousValue = e.key + "";

input_field.value = "";
inputSum += e.key
input_field.value = inputSum;

} else { // is not pair
actual_previousValue = previousValue;
previousValue = e.key + "";

alsoInput += e.key
input_field.value = alsoInput;}}


function operand_click(e) { // when exactly is delete being called?
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
currentValue.push(previousValue);

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

if(isKeyboard == false){ console.log('isMouse')
previousValue = e.target.textContent + ""
} else { console.log('isKeyboard')
previousValue = e.key + ""};
console.log('delete')

if((e.key == "Backspace" && isPair == false) || (e.target.textContent == "DEL" && isPair == false)) { console.log('reached03')
alsoInput = alsoInput + "";

if(isPair == false) { console.log('reached final') // SEE HERE //  && alsoInput > 0

alsoInput = alsoInput.slice(0, alsoInput.length -1);
alsoInput = +alsoInput;
input_field.value = alsoInput;}

if(isPair == false && alsoInput == "0") {

alsoInput = "";
input_field.value = alsoInput;}}

if((e.key == "Backspace" && isPair == true) || (e.target.textContent == "DEL" && isPair == true)) { console.log('reached04')
inputSum = inputSum + "";

if(isPair == true) { // SEE HERE // && inputSum.length > 0

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