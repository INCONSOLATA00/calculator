let alsoInput ="";
let inputSum = "";
let someArray = ['-','+','/','*',];

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

if(isPair == true) {
inputSum = alsoInput.slice(0, inputSum.length -1);
input_field.value = inputSum;
} else {
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
}
});

const functions_all_clear  = document.querySelector(".assignment02 > button:nth-child(2)").addEventListener('click', () => {
console.log('all clear')

inputSum = "";
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', () => {
console.log('equals')

if(isContinuous_value == false) { // 50 + 50 = 100
alsoInput = +alsoInput + +inputSum;  // according to operator used*
input_field.value = alsoInput;

isContinuous_value = true;
} else if(isContinuous_value == true) { // 100 + 50 ... isContinuous to become false on AC
alsoInput += +inputSum
input_field.value = +alsoInput;
}


// isPair = false; - on AC ?
// add logic so that del can be used on the sum of an equation ... if isContinuous_value == true delete chars at?
});


window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click)
};



function keyboard_input(e) {
if(e.key == "Backspace" && isPair == true) {
console.log('fired')

inputSum = inputSum.slice(0, inputSum.length -1);
input_field.value = inputSum;
} else  if(e.key == "Backspace" && isPair == false) {

alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
}

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

}

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
// allow equals only with number pairs.
// sum the pair, and continuously update a variable, until "AC" is pressed. -->
