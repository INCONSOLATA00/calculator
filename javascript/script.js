

const input_field = document.querySelector("div > input");
input_field.value = "value";

const operands = document.querySelectorAll("#numpad > button");

for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', operand_click);
}

function  operand_click(e) {
console.log(e.target.textContent);
input_field.value += e.target.textContent; // may need to store values, may need conditional for "."
}