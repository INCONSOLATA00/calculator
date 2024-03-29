setInterval(()=>{console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue}`) },100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let previousValue;
let actual_previousValue;

let currentValue = []; // numerical

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

function arithmetic(e) { // operators only* // ADD DYNAMIC OPERATION HERE
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";

if(alsoInput > 0) {
isPair = true;

} if(inputSum > 0 && alsoInput > 0) {
currentValue.push(alsoInput) 
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

if(previousValue !== actual_previousValue) { console.log('reached01')
console.log('equals')
// is attempting to push " '' "
// inputSum = +inputSum + +alsoInput; false code* - addition is not happening here


input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) { console.log('reached02')
console.log('equals')
inputSum += +currentValue[0];
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

// someArray.some((opr)=> e.key == opr) == false, allow use of keyboard to enter operators*

// DELETES VALUES FROM INCORRECT ASSIGNMENT

function operand_delete(e){
console.log('delete')

if((e.key == "Backspace" && isPair == false) || (e.target.textContent == "DEL" && isPair == false)) { console.log('reached03')

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput= +alsoInput;
input_field.value = alsoInput;

if(alsoInput == 0) { console.log('reached00')
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = "";
input_field.value = alsoInput;
}}

if((e.key == "Backspace" && isPair == true) || (e.target.textContent == "DEL" && isPair == true)) { console.log('reached04')

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput= +alsoInput;
input_field.value = alsoInput;

if(alsoInput == 0) { console.log('reached00')
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = "";
input_field.value = alsoInput;
}}

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