let  alsoInput;

const input_field = document.querySelector("div > input");
input_field.value = "value";

const operands = document.querySelectorAll("#numpad > button");


window.addEventListener("keyup", keyboard_input);

for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click);
}



function keyboard_input(e) {
console.log(alsoInput)
// only if it is a number key that is engaged (conditional)

alsoInput += e.key
input_field.value = alsoInput;
}

function  operand_click(e) {
console.log(alsoInput)

if(e.target.textContent == ".")  { // change from literal value to stored to account for text inputs
operands[11].removeEventListener("#numpad > button");
}

alsoInput += e.target.textContent;
input_field.value += alsoInput;
}

