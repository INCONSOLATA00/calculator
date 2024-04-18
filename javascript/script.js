setInterval(()=>{
// console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) 
// console.log(`currentValue.length ${currentValue.length} also_inputSum.length ${also_inputSum.length} history ${history} history.length ${history.length}`)
// console.log(`also_inputSum ${also_inputSum} evaluation02() ${evaluation02()} filtered_history ${filtered_history()}`)
console.log(`evaluation03() ${evaluation03()} evaluation04 ${evaluation04()} unaltered_history ${unaltered_history} evaluation05 ${evaluation05()} history ${history}`)
},100)

let alsoInput = "";
let inputSum = "";

let previousValue;
let actual_previousValue;

let currentValue = [];
let currentOperator = [];
let also_inputSum = [];

let unaltered_history = [];
let history = [];

let isPair = false;
let isContinuous = false;

let someArray = ['-','+','/','*'];
let also_someArray = ['-','+','/','*',''];
let falseValues = ['DEL', 'AC', '='];

let evaluation00 = () => someArray.some((value) => value == previousValue);
let evaluation01 = () => falseValues.some((value) => value == previousValue);
let filtered_history = () => history.filter((value) => !also_someArray.includes(value));
let evaluation02 = () => +filtered_history()[filtered_history().length -1];
let evaluation03 = () => {if(isNaN(unaltered_history.map((value) => +value)[0]) == true && unaltered_history[0] !== undefined) { return true } else {return false}};
let evaluation04 = () => {if(isNaN(history.map((value) => +value)[1]) == true && unaltered_history[1] !== undefined) { return true } else {return false}};
let evaluation05 = () => currentOperator.filter((value) => !falseValues.includes(value)).length;

const input_field = document.querySelector("div > input");
input_field.value = "";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);}

let alsoInput_copy;
function arithmetic(e) {
if(previousValue !== '+'){
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
if(evaluation01() == false) {unaltered_history.push(previousValue)};

if(isPair == false) { history.push(alsoInput); } else {history.push(inputSum);}
currentOperator.push(previousValue);

if(evaluation01() == false) { history.push(previousValue)};
isPair = false; // verify integrity*
if(alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") { console.log('000')
isPair = true;
alsoInput_copy = +alsoInput;} 

if(inputSum > 0 && alsoInput > 0 && evaluation00() == true) {
determine_arithmetic(currentOperator[currentOperator.length -2]);
console.log('001')
alsoInput = "";
input_field.value = inputSum;
isPair = false;

} else if(inputSum > 0 && alsoInput > 0 && previousValue !== "DEL") {
currentValue.push(alsoInput)
if(inputSum > 0 && alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") {
determine_arithmetic(currentOperator[currentOperator.length -2]);
console.log('002')
alsoInput = "";
isPair = false;
}};
}}
const functions_delete = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {
operand_delete(e);
});

const functions_all_clear = document.querySelector(".assignment02 > button:nth-child(2)")
functions_all_clear.addEventListener('click', (e) => {
previousValue = e.target.textContent + "";
console.log('ac')

isPair = false;
alsoInput = "";
inputSum = "";

isPair = false;
isContinuous = false;

currentValue = [];
also_inputSum = [];

input_field.value = alsoInput;
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {
if (!(!evaluation03() == true && evaluation04() == true && unaltered_history.length > 1)) { console.log('reached00 (false)')
unaltered_history = []; console.log('values reset')

} else if(!evaluation03() == true && evaluation04() == true && evaluation05() < 2 && unaltered_history.length > 1) { console.log('reached00 (true)')
if(also_inputSum == "" && evaluation05() < 2  && history.length == 2) { console.log('also')

history.push(alsoInput_copy);
input_field.value = history.filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value;
history.pop();

} else if(evaluation05() < 2) { console.log('also_also')
input_field.value = history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; }

} else if(previousValue !== actual_previousValue && history.length >= 3 && unaltered_history.length > 1 && evaluation05() > 1) { console.log('reached01')
console.log('equals')
determine_arithmetic(currentOperator[0]);
input_field.value = inputSum; // (timeout @ 05)*
alsoInput = "";

} else if(previousValue == actual_previousValue) {
console.log('equals')

if (currentValue.length >= 1) { console.log('0002')
also_inputSum.push(alsoInput_copy);
determine_arithmetic(currentOperator[0]);
alsoInput = ""; // SEE BELOW
}}

previousValue = e.target.textContent + "";
});

window.addEventListener("keyup", keyboard_input);
for(let i = 0; i < operands.length -1; i++) {
operands[i].addEventListener('click', buttons_click)};

function keyboard_input(e) {

if(isNaN(e.key) == true) {
actual_previousValue = previousValue;
previousValue = e.key + "";
unaltered_history.push(previousValue);

operand_delete(e)
} else if (isPair == true){
actual_previousValue = previousValue;
previousValue = e.key;

// history.push(previousValue);
unaltered_history.push(previousValue);

inputSum += e.key;
input_field.value = inputSum;

} else {
actual_previousValue = previousValue;
previousValue = +e.key;

// history.push(previousValue);
unaltered_history.push(previousValue);

alsoInput += e.key;
input_field.value = alsoInput;}}

function buttons_click(e) { // as in numerical buttons, not to be confused with operators
actual_previousValue = previousValue;
previousValue = +e.target.textContent;
unaltered_history.push(previousValue);
determine_behavior();

if(previousValue == "=" && typeof actual_previousValue == "number") {
functions_all_clear.click();

} else if(isPair == true) {
input_field.value = "";

inputSum += e.target.textContent;
input_field.value = inputSum;

} else {
alsoInput += e.target.textContent;
input_field.value = alsoInput;
}}

// someArray.some((opr) => e.key == opr) == false, allow use of keyboard to enter operators. (optional features)
// needs new variable for history including "=" (CURRENT)

// determine if a number is pressed directly after "="
// determine if a number is pressed directly after "=" followed by "+"
function determine_behavior(){ console.log('determine behaviour')
someArray_numerical = ['0','1','2','3','4','5','6','7','8','9','.'];
if(history[history.length -2] == '='){ // && history.findLastIndex((value) => someArray_numerical.includes(value)) == currentOperator.length -2 == true
console.log('isPair = false (stage one)')

// }
// else if(history.findLastIndex((value) => someArray.includes(value)) == currentOperator.length -2
// && history.findLastIndex((value) => someArray_numerical.includes(value)) == currentOperator.length -1 == true){
// console.log('isPair... (stage two)')
}};

function operand_delete(e){
console.log('delete')
if(actual_previousValue !== "=") {
if((e.key == "Backspace" && isPair == false ) || (e.target.textContent == "DEL" && isPair == false)) {

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = +alsoInput;
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
}}}}

function determine_arithmetic(value){
switch(value) {

case "-":
if(inputSum > 0) { // condition for = assignment that determines if a number is += itself or not*
inputSum = +inputSum - +alsoInput;
} else {
inputSum = +alsoInput - +alsoInput;
}
return;

case "+":
if(inputSum > 0 && alsoInput > 0 && currentValue.length <= 1) { console.log('reached03')
inputSum = +inputSum + +alsoInput;
} else if (inputSum > 0 && alsoInput == 0) { console.log('reached04')
input_field.value = filtered_history().reduce((a, b) => +a + +b) + +filtered_history()[filtered_history().length -1];
inputSum = input_field.value;
history.push(+filtered_history()[filtered_history().length -1]);
unaltered_history.push(+filtered_history()[filtered_history().length -1]);

} else { console.log('reached05');
if(history.length % 2 > 0) {
setTimeout(() => { console.log('030')
input_field.value = history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; 
}, 1)} else {
setTimeout(() => { console.log('040')
input_field.value = history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; 
}, 1)}}
return;

case "/":
if(inputSum > 0) {
inputSum = +inputSum / +alsoInput;
} else {
inputSum = +alsoInput / +alsoInput;
}
return;

case "*":
if(inputSum > 0) {
inputSum = +inputSum * +alsoInput;
} else {
inputSum = +alsoInput * +alsoInput;
}
return;
}}

