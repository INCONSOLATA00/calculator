setInterval(()=>{
// console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) 
// console.log(`currentValue.length ${currentValue.length} also_inputSum.length ${also_inputSum.length} history ${history} history.length ${history.length}`)
//console.log(`also_inputSum ${also_inputSum} evaluation02() ${evaluation02()} filtered_history ${filtered_history()}`)
// console.log(`evaluation03() ${evaluation03()} evaluation04 ${evaluation04()} unaltered_history ${unaltered_history} evaluation05 ${evaluation05()} history ${history}`)
// console.log(`absolute_history ${absolute_history}`)

console.log(`history ${history} filtered_history ${filtered_history()}`)
},100)

let previousValue;
let actual_previousValue;

let alsoInput = "";
let inputSum = "";

let currentValue = [];
let currentOperator = [];
let also_inputSum = [];

let unaltered_history = [];
let absolute_history = [];
let history = [];

let isPair = false;
let behaviour00 = false;
let behaviour01 = false;


const someArray = ['-','+','/','*'];
const also_someArray = ['-','+','/','*',''];
const falseValues = ['DEL', 'AC', '='];
const also_falseValues = ['DEL', 'AC'];
let alsoInput_copy;

const evaluation00 = () => someArray.some((value) => value == previousValue);
const evaluation01 = () => falseValues.some((value) => value == previousValue);
const filtered_history = () => history.filter((value) => !also_someArray.includes(value));
const evaluation02 = () => +filtered_history()[filtered_history().length -1];
const evaluation03 = () => {if(isNaN(unaltered_history.map((value) => +value)[0]) == true && unaltered_history[0] !== undefined) { return true } else {return false}};
const evaluation04 = () => {if(isNaN(history.map((value) => +value)[1]) == true && unaltered_history[1] !== undefined) { return true } else {return false}};
const evaluation05 = () => currentOperator.filter((value) => !falseValues.includes(value)).length;
const evaluation06 = () => also_falseValues.some((value) => value == previousValue);

const input_field = document.querySelector("div > input");
input_field.value = "";
const operands = document.querySelectorAll("#numpad > button");

const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
for(let i = 0; i < arithmetic_functions.length; i++){
arithmetic_functions[i].addEventListener('click', arithmetic);}

function arithmetic(e) {
if(previousValue !== '+'){
actual_previousValue = previousValue;
previousValue = e.target.textContent + "";
if(evaluation01() == false) {unaltered_history.push(previousValue)};
if(evaluation06() == false) {absolute_history.push(previousValue)};

if(isPair == false) {history.push(alsoInput);} else {if(previousValue !== '='){history.push(inputSum)}};
currentOperator.push(previousValue);

if(evaluation01() == false) { history.push(previousValue)};
isPair = false; // verify integrity*
if(alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") { console.log('000') // SEE HERE, 000
isPair = true;
alsoInput_copy = +alsoInput;} 

if(inputSum > 0 && alsoInput > 0 && evaluation00() == true) {
determine_arithmetic(currentOperator[currentOperator.length -2]); // SEE BELOW, 001
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
}};}}

const functions_delete = document.querySelector(".assignment02 > button").addEventListener('click', (e) => {
operand_delete(e);
});
const functions_all_clear = document.querySelector(".assignment02 > button:nth-child(2)")
functions_all_clear.addEventListener('click', (e) => {
previousValue = e.target.textContent + "";
console.log('ac')

currentValue = []; unaltered_history = [];
currentOperator = []; absolute_history = [];
history = []; inputSum = ""; alsoInput = "";
input_field.value = alsoInput; behaviour01 = false;}); // see last 

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {
if (!(!evaluation03() == true && evaluation04() == true && unaltered_history.length > 1)) { console.log('reached00 (false)')
unaltered_history = []; console.log('values reset')

} else if(!evaluation03() == true && evaluation04() == true && evaluation05() < 2 && unaltered_history.length > 1) { console.log('reached00 (true)')
if(also_inputSum == "" && evaluation05() < 2  && history.length == 2) { console.log('also')

behaviour01 = true;
// if(previousValue !== '=') { // may potentially prevent passing of incorrect values (err res see 000, 001)
history.push(alsoInput_copy)
// }; //  to only execute on +, = but not =, +

absolute_history.push(alsoInput_copy);
input_field.value = history.filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value;
history.pop();

} else if(evaluation05() < 2) { console.log('also_also')
if(behaviour01 == true || currentValue.length == 1){
input_field.value = history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; } 
else { console.log('also_alsoAlso')
inputSum = inputSum + +history[history.length - history.length +2];
input_field.value = inputSum;
}}

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
alsoInput = "";
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
unaltered_history.push(previousValue);
absolute_history.push(previousValue);

inputSum += e.key;
input_field.value = inputSum;

} else {
actual_previousValue = previousValue;
previousValue = +e.key;

unaltered_history.push(previousValue);
absolute_history.push(previousValue);

alsoInput += e.key;
input_field.value = alsoInput;}}

function buttons_click(e) { // as in numerical buttons, not to be confused with operators
actual_previousValue = previousValue;
previousValue = +e.target.textContent;
unaltered_history.push(previousValue);
absolute_history.push(previousValue);
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
// determine if a number is pressed directly after "=" followed by "+"
// unaltered containes the correct standing value, but all other values returning the current standing history append
// - an additional number from the first equation / instance

function determine_behavior(){ console.log('determine behaviour')
if(absolute_history[absolute_history.length -2] == '='){ console.log('DB_stage one')

//inputSum = "";
//input_field.value = inputSum;
//isPair = true;

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
if(inputSum > 0) { // condition for = assignment that determines if a number is += itself or not.
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
absolute_history.push(+filtered_history()[filtered_history().length -1]);

} else { console.log('reached05');
if(history.length % 2 == 0) {
setTimeout(() => { console.log('030')
input_field.value = unaltered_history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b ); // may only produce correct value with singular integer*
inputSum = +input_field.value;
behaviour00 = false;
}, 1)

} else {
if(behaviour00 == true){
setTimeout(() => { console.log('040')
input_field.value = unaltered_history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; 
}, 1)} else {
inputSum = +inputSum + +alsoInput;
behaviour00 = true;
}
}}

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

