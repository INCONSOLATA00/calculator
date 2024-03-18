let  alsoInput ="";
let inputSum = "";
let someArray = ['-','+','/','*',];
let isPair = false;

const input_field = document.querySelector("div > input");
input_field.value = "value";
const operands = document.querySelectorAll("#numpad > button");



const arithmetic_functions_subtract = document.querySelector(".assignment00 > button:nth-child(1)").addEventListener('click', () => {
console.log('subtract')
isPair = true;
});

const arithmetic_functions_add= document.querySelector(".assignment00 > button:nth-child(2)").addEventListener('click', () => {
console.log('add')
isPair = true;
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

alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
});

const functions_all_clear  = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', () => {
console.log('all clear')

inputSum = "";
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', () => {
console.log('equals')

 input_field.value = +alsoInput + + inputSum;
// SEE DO EQUATION 
});


window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)
};



function keyboard_input(e) {
if(e.key == "Backspace") {
console.log('fired')

alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
} else {

if(isNaN(e.key) == true) {
// do nothing

} else if (isPair == true){
input_field.value = "";

inputSum += e.key
input_field.value = inputSum;

} else {
alsoInput += e.key
input_field.value = alsoInput;
}

}}

function  operand_click(e) {


if(isPair == true) {
input_field.value = "";

inputSum += e.target.textContent;
input_field.value = inputSum;

} else {
alsoInput += e.target.textContent;
input_field.value = alsoInput;
}
}

// someArray.some((opr)=> e.key == opr) == false, allow use of keyboard to enter operators*
// allow equals only with number pairs. (optional)
// sum the pair, and continuously update a variable, until "AC" is pressed. -->
