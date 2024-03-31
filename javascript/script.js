setInterval(()=>{console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) },100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let previousValue;
let actual_previousValue;

let currentValue = [];

let someArray = ['-','+','/','*',];
let isPair = false;


const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);
}

let alsoInput_copy;
function arithmetic(e) {
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";


if(alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") { console.log('000') // prevent delete from registering as generic operation* // or backspace*
isPair = true;
alsoInput_copy = +alsoInput; // is being assigned each time = is used, add conditional*

} if(inputSum > 0 && alsoInput > 0 && previousValue !== "DEL") {  console.log(` see here ${previousValue}`) // WAS HERE
currentValue.push(alsoInput)


console.log('001')
// disable delete button
inputSum = +inputSum + +alsoInput;

alsoInput = "";
isPair = false;

}}


const functions_delete = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {
previousValue = e.target.textContent + "";
operand_delete(e);
});

const functions_all_clear = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', (e) => {
previousValue = e.target.textContent + "";
console.log('ac')

isPair = false;
alsoInput = "";
inputSum = "";
currentValue = [];

input_field.value = alsoInput;
});

let also_inputSum = [];
const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {

if (inputSum == "") { console.log('reached00')
if(also_inputSum == "") { console.log('initial')
also_inputSum.push(alsoInput_copy);  // may need to call function here later* // MAY NEED TO REFER TO A PREVIOUS VALUE LATER*
input_field.value = also_inputSum.reduce((a, b)=> a + b);
alsoInput = +input_field.value;

} else {
also_inputSum.push(alsoInput_copy);
input_field.value = also_inputSum.reduce((a, b)=> a + b);
alsoInput = +input_field.value;
}

} else if(previousValue !== actual_previousValue) { console.log('reached01')
console.log('equals')

input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) { console.log('reached02')
console.log('equals')
inputSum += +currentValue[0]; // needs to be reset on clear, and on ??? create additional assignment for continuous opperations ???
input_field.value =  inputSum;
}                  
previousValue = e.target.textContent + "";
});

window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)};

function keyboard_input(e) {
operand_delete(e)

// --------------------------------

if(isNaN(e.key) == true) {
} else if (isPair == true){
actual_previousValue = previousValue;
previousValue = e.key + "";

inputSum += e.key;
input_field.value = inputSum;

} else {
actual_previousValue = previousValue;
previousValue = e.key + "";

alsoInput += e.key;
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

// someArray.some((opr)=> e.key == opr) == false, allow use of keyboard to enter operators.
// if number buttons are pressed after equals, call clear.

function operand_delete(e){
console.log('delete')
if(actual_previousValue !== "=") { // only works the first time around.
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