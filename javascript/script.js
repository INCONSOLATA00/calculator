let  alsoInput ="";

const input_field = document.querySelector("div > input");
input_field.value = "value";

const operands = document.querySelectorAll("#numpad > button");


window.addEventListener("keyup", keyboard_input);

for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click);
}



function keyboard_input(e) {

console.log(e.key)
if(e.key == "Backspace") { // find a way to delete the last character of a string in a variable, may need to use array data structure
console.log('fired')

alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;
}
// only if it is a number key that is engaged; excluding backspace (conditional)

alsoInput += e.key
input_field.value = alsoInput;
}

function  operand_click(e) { // -= if backspace "del" clicked

if(e.target.textContent == ".")  { // change from literal value to stored to account for text inputs
operands[11].removeEventListener("#numpad > button");
}

alsoInput += e.target.textContent;
input_field.value = alsoInput;
}

