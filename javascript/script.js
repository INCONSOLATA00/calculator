setInterval(()=>{console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} `) },100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let previousValue;
let actual_previousValue;
let also_alsoInput;

let someArray = ['-','+','/','*',];
let isPair = false;

const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");


// SEE HERE


const arithmetic_functions_subtract = document.querySelector(".assignment00 > button:nth-child(1)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('subtract')
isPair = true;});


const arithmetic_functions_add= document.querySelector(".assignment00 > button:nth-child(2)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('add');

if(alsoInput > 0) {
isPair = true;

} if(inputSum > 0 && alsoInput > 0) {
inputSum = +inputSum + +alsoInput;
alsoInput = "";
isPair = false;


} if(isPair == true && alsoInput == "") {
isPair = false;
}});


const arithmetic_functions_divide = document.querySelector(".assignment01 > button:nth-child(1)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('divide')
isPair = true;});


const arithmetic_functions_multiply = document.querySelector(".assignment01 > button:nth-child(2)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('multiply')
isPair = true;});


const functions_delete  = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('delete')

if(isPair == false) {alsoInput = alsoInput + "";
if(isPair == false && alsoInput > 0) {

alsoInput = alsoInput.slice(0, alsoInput.length -1);
alsoInput = +alsoInput;
input_field.value = alsoInput;
} 
if (isPair == false && alsoInput  == "0") {

alsoInput = "";
input_field.value = alsoInput;}}

if(isPair == true) {inputSum = inputSum + "";
if(isPair == true && inputSum.length > 0) {

inputSum = inputSum.slice(0, inputSum.length -1);
inputSum = +inputSum;
input_field.value = inputSum;}

if(isPair == true && inputSum  == "0") {

inputSum = "";
input_field.value = inputSum;
}}});

const functions_all_clear  = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('ac')

isPair = false;
alsoInput = "";
inputSum = "";

input_field.value = alsoInput;
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('equals')


if(previousValue !== actual_previousValue) {
inputSum =  +inputSum  + +alsoInput;
also_alsoInput = +alsoInput;

input_field.value = inputSum;
alsoInput = "";

} else if(previousValue == actual_previousValue) {
input_field.value = inputSum += also_alsoInput;
}});


window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)};


function keyboard_input(e) { // deleting numbers from incorrect pair (copy code from click function) e.key == "Backspace"

actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
console.log('delete')

if(isPair == false && e.key == "Backspace") {
alsoInput = alsoInput + "";

if(isPair == false && alsoInput > 0) {

alsoInput = alsoInput.slice(0, alsoInput.length -1);
alsoInput = +alsoInput;
input_field.value = alsoInput;
} 
if (isPair == false && alsoInput  == "0") {

alsoInput = "";
input_field.value = alsoInput;}}

if(isPair == true && e.key == "Backspace") {
inputSum = inputSum + "";

if(isPair == true && inputSum.length > 0) {

inputSum = inputSum.slice(0, inputSum.length -1);
inputSum = +inputSum;
input_field.value = inputSum;}

if(isPair == true && inputSum  == "0") {

inputSum = "";
input_field.value = inputSum;
}}

// --------------------------------

if(isNaN(e.key) == true) {
// do nothing

} else if (isPair == true){
input_field.value = "";
inputSum += e.key
input_field.value = inputSum;

} else {
alsoInput += e.key
input_field.value = alsoInput;
}}

function  operand_click(e) {

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
// allow equals only with number pairs.
