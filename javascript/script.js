setInterval(()=>{console.log(`add: alsoInput ${alsoInput} inputSum ${inputSum}`) },100)

let alsoInput ="";
let inputSum = "";
let inputTotal = "";

let someArray = ['-','+','/','*',];
let count = 0;

let isContinuous_value = false;
let isPair = false;

const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");


const arithmetic_functions_subtract = document.querySelector(".assignment00 > button:nth-child(1)").addEventListener('click', () => {
console.log('subtract')
isPair = true;
});

const arithmetic_functions_add= document.querySelector(".assignment00 > button:nth-child(2)").addEventListener('click', () => {
console.log('add');

if(alsoInput > 0) {
isPair = true;
count++;
} 

if(inputSum > 0 && alsoInput > 0) { // switch to pair one
isPair = false; // false == pair one, true == pair two

console.log('fired03');
inputSum = +alsoInput + +inputSum;
input_field.value = alsoInput;
alsoInput = "";
}

});

const arithmetic_functions_divide = document.querySelector(".assignment01 > button:nth-child(1)").addEventListener('click', () => {
console.log('divide')
isPair = true;
});

const arithmetic_functions_multiply = document.querySelector(".assignment01 > button:nth-child(2)").addEventListener('click', () => {
console.log('multiply')
isPair = true;
});

const functions_delete  = document.querySelector(".assignment02 > button").addEventListener('click', () => {
console.log('delete')


if(isPair == false && count < 1) {
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
} else if(isPair == true && count < 1) {
inputSum = inputSum.slice(0, inputSum.length -1);
input_field.value = inputSum;
} else if(isPair == true && count >= 1) {
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
alsoInput = +alsoInput;
}});


const functions_all_clear  = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', () => {
console.log('all clear')

count = 0;
isPair = false;
isContinuous_value == false;

alsoInput = "";
inputSum = "";

input_field.value = alsoInput;
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', () => {
console.log('equals')

if(isPair == true || inputSum > alsoInput) {
inputSum =  +inputSum  + +alsoInput;  // according to operator used*
input_field.value = inputSum;
alsoInput = "";

} else if(isPair == false) {
input_field.value = "";
}});


window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)
};


function keyboard_input(e) {
if(e.key == "Backspace" && isPair == true && count < 1) {
console.log('fired00')

inputSum = inputSum.slice(0, inputSum.length -1);
input_field.value = inputSum;
} else  if(e.key == "Backspace" && isPair == false && count < 1) {

alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
}

// --------------------------------

if(e.key == "Backspace" && isPair == true && count >= 1) {
console.log({alsoInput});

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
alsoInput = +alsoInput; // SEE HERE
}

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

// when adding 500 + 550, - when deleting 1 character, proceeds to delete from pair one, revise conditional*
// this bug persists with both backspace and onmousedown
