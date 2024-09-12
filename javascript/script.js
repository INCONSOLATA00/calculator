setInterval(()=>{

// console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) 
//console.log(`currentValue.length ${currentValue.length} history ${history} history.length ${history.length}`)
// console.log(`evaluation03() ${evaluation03()} evaluation04 ${evaluation04()} unaltered_history ${unaltered_history} evaluation05 ${evaluation05()} history ${history}`)
console.log(`absolute_history ${absolute_history} history ${history} unaltered_history ${unaltered_history}`)
// console.log(`history ${history} filtered_history ${filtered_history().length} repeats ${repeats}`)
// console.log(`${alsoAlso_inputCopy}`)

// console.log(`V1 ${typeof absolute_history[absolute_history.length - alsoValue] == 'number'}
// V2 ${typeof absolute_history[absolute_history.length - alsoValue -1] == 'string'} 
// V3 ${typeof absolute_history[absolute_history.length - alsoValue -2] == 'number'}`)

},100)
// if(typeof absolute_history[absolute_history.length - alsoValue] == 'number' && // works but wrong landing*
// typeof absolute_history[absolute_history.length - alsoValue -1] == 'string' &&
// typeof absolute_history[absolute_history.length - alsoValue -2] == 'number') { console.log('050')

let previousValue;
let actual_previousValue;

let alsoInput = "";
let inputSum = "";

let currentValue = [];
let currentOperator = [];
let alsoAlso_inputCopy = []; // may need to be reset on new assignment / may continue past "AC" - undetermined*

let unaltered_history = [];
let unaltered_placeholder;

let absolute_history = [];
let history = [];

let isPair = false;
let behaviour00 = false; // (resets automatically) on new assignment
let behaviour01 = false; // set to reset on new assignment

let behaviour02 = false; // reset on new assignment
let behaviour03 = false; // reset on new assignment

let repeats = false; // reset on new assignment ||
let iteration = 0; // reset on new assignment || SEE BOTTOM & AC

const someArray = ['-','+','/','*'];
const also_someArray = ['-','+','/','*',''];
const alsoAlso_someArray = ['-','+','/','*','='];

const falseValues = ['DEL', 'AC', '='];
const also_falseValues = ['DEL', 'AC'];

const evaluation00 = () => someArray.some((value) => value == previousValue);
const evaluation01 = () => falseValues.some((value) => value == previousValue);

const filtered_history = () => history.filter((value) => !also_someArray.includes(value));
const absolute_filter = () => absolute_history.filter((value) => !alsoAlso_someArray.includes(value));

const evaluation03 = () => {if(isNaN(unaltered_history.map((value) => +value)[0]) == true && unaltered_history[0] !== undefined) { return true } else {return false}};
const evaluation04 = () => {if(isNaN(history.map((value) => +value)[1]) == true && unaltered_history[1] !== undefined) { return true } else {return false}};
const evaluation05 = () => currentOperator.filter((value) => !falseValues.includes(value)).length;
const evaluation06 = () => also_falseValues.some((value) => value == previousValue);

let alsoInput_copy;
let length = alsoInput_copy+"";
let alsoLength = length.length;
let value = absolute_history.indexOf('+');

let beforeCumulative; // last numerical before cumulative
let alsoValue = -1;

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


if(isPair == false) {history.push(alsoInput); console.log('current')}  else {if(previousValue !== '='){history.push(inputSum); console.log('also-current')}};
currentOperator.push(previousValue);

if(evaluation01() == false && previousValue !== "DEL") { history.push(previousValue);
isPair = false;}

if(alsoInput > 0 && previousValue !== "DEL" && previousValue !== "=") { console.log('000')
isPair = true;
alsoInput_copy = +alsoInput;} 

if(inputSum > 0 && alsoInput > 0 && evaluation00() == true && previousValue !== "DEL") {
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
input_field.value = alsoInput; behaviour01 = false;});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {
history.push(inputSum);

if (!(!evaluation03() == true && evaluation04() == true && unaltered_history.length > 1)) { console.log('reached00 (false)')
unaltered_history = []; console.log('values reset')

} else if(!evaluation03() == true && evaluation04() == true && evaluation05() < 2 && unaltered_history.length > 1 && inputSum == '') { console.log('reached00 (true)')
if(evaluation05() < 2) { console.log('also')

behaviour01 = true;
unaltered_history.splice(0,alsoLength,alsoInput_copy);
unaltered_history.push(alsoInput_copy);
input_field.value = unaltered_history.reduce((a,b) => a + b);
inputSum = +input_field.value;
}

} else if(previousValue !== actual_previousValue && history.length >= 3 && unaltered_history.length > 1 && evaluation05() > 1 || evaluation05() < 2) { console.log('reached01') // new last conditional, see after ||
console.log('equals')
alsoAlso_inputCopy.push(inputSum);
determine_arithmetic(currentOperator[0]);
input_field.value = inputSum; // (timeout @ 05)*
alsoInput = "";

} else if(previousValue == actual_previousValue) {
console.log('equals')

if (currentValue.length >= 1) { console.log('0002')
determine_arithmetic(currentOperator[0]);
alsoInput = "";}}
previousValue = e.target.textContent + "";});


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

function buttons_click(e) { // as in numerical buttons, not to be confused with operators (DOES NOT INCLUDE DELETE)
actual_previousValue = previousValue;
previousValue = +e.target.textContent;
unaltered_history.push(previousValue);
absolute_history.push(previousValue);
determine_behaviour();

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


function determine_behaviour(){ console.log('determine behaviour')
if(absolute_history[absolute_history.length -2] == '='){ console.log('DB_stage one')
}};
// PREVENT 0 FROM BEING ENTERED IF THE TOTAL LENGTH OF THE CURRENT ASSIGNMENT IS EQUAL TO 1*


function operand_delete(e){
console.log('delete')
if(actual_previousValue !== "=") {
if((e.key == "Backspace" && isPair == false ) || (e.target.textContent == "DEL" && isPair == false)) {

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = +alsoInput;
input_field.value = alsoInput;

unaltered_history.splice(unaltered_history.length - unaltered_history.length,unaltered_history.length,alsoInput) // updates values in place
absolute_history.splice(absolute_history.length - absolute_history.length,absolute_history.length,alsoInput) // additional, may be redundant on error

// subtract both lengths for current position?
// unsure if splicing full lengths will exacerbate further issues
// WARN  may not target later assignments; WARN "history" may affect other assignments

if(alsoInput == 0) { // do this for above if length == 1* ^^^  ^^^ ^^^ SEE ABOVE
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;}}




if((e.key == "Backspace" && isPair == true) || (e.target.textContent == "DEL" && isPair == true)) {

inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);

unaltered_history.splice(unaltered_history.length - unaltered_history.length,unaltered_history.length,alsoInput) // updates values in place
absolute_history.splice(absolute_history.length - absolute_history.length,absolute_history.length,alsoInput) // additional, may be redundant on error

inputSum = +inputSum;
input_field.value = inputSum;

if(inputSum == 0) {
inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);
input_field.value = inputSum;
}}

} // master conditional
} // function

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
} else if (inputSum > 0 && alsoInput == 0 && evaluation05() < 2) { console.log('reached04') // cumulative with wrong value


filtered_history().reduce((a,b) => { // requires reset on new assignment*
if(a == b && iteration < 2) {repeats = true}
iteration++
return repeats;
})

if(currentOperator.length % 2 == 1 && currentOperator.length < 4) { console.log('EXECUTED00')
unaltered_history.splice(0,alsoLength,alsoInput_copy);
unaltered_history.push(alsoAlso_inputCopy[0]);
}

if(history[history.length-2] == '' && behaviour02 == false && repeats == false){ console.log('EXECUTED01')
unaltered_history.push(alsoInput_copy);
//unaltered_history.push(alsoAlso_inputCopy[0]);
behaviour02 = true;
}
if(history[2] == ''){ console.log('EXECUTED02') // CAN TRY MODULO ON REVISE IF FURTHER NEEDED*
unaltered_history.push(alsoInput_copy); // for single value pairs*
if(history.length == 5) {unaltered_history.push(alsoInput_copy)}

} else if (history[2] !== '') { console.log('EXECUTED03')
absolute_history.push(alsoInput_copy);
if(history.length > 3) {unaltered_history.push(alsoAlso_inputCopy[0])}
}

input_field.value = unaltered_history.reduce((a,b) => +a + +b);
inputSum = +input_field.value;


} else if(evaluation05() > 1) { console.log('reached05'); // 50 + 50 = + 50 (DO THE EXACT SAME THING THAT WAS DONE IN 03) - was originally just else*
// if(value > -1 && typeof absolute_history[value+1] == 'number') {
setTimeout(() => { console.log('030')

for(let i = history.length; i > 0; i--) { // finds the last position a cumulative value was at
if(history[i-1] !== '' && typeof history[i] == 'number' && typeof history[i-1] !== 'number'){
beforeCumulative = history[i-1];
break;}}

for(let i = 0; i < input_field.value.length; i++) {
alsoValue++;}

if(typeof absolute_history[absolute_history.length - alsoValue] == 'number' && typeof absolute_history[absolute_history.length - alsoValue -1] == 'string' && typeof absolute_history[absolute_history.length - alsoValue -2] == 'number') { console.log('050')

} else { console.log('60')
absolute_history.push(+beforeCumulative); // yikes (correct but shaky, also recent)
unaltered_history.push(+beforeCumulative);
}

input_field.value = convertArray();
behaviour00 = false;
}, 1)

} else if(behaviour00 == true){
setTimeout(() => { console.log('040') // 50 + 50 =, 50 + 50 = (determine if there is a complete assignment)
input_field.value = unaltered_history.slice().filter((value) => !someArray.includes(value)).reduce((a,b) => +a + +b );
inputSum = +input_field.value; 
}, 1)} else {
inputSum = +inputSum + +alsoInput;
behaviour00 = true;}

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


function convertArray(count = 0){
let values = {};
let values_indices = 0;
let placeholder_ = [];

for(let j = 0; j < absolute_history.length; j++) {
if(typeof absolute_history[j] == 'number') { 

if(!values[values_indices]){
values[values_indices] = [];
}

if(!values[values_indices] == []){
values[values_indices].push(absolute_history[j]+"");
}

} else if(typeof absolute_history[j] == 'string') {
values_indices++;}}

for(const key in values) {
values[key] = values[key].join('');
placeholder_.push(+values[key]);
}

placeholder_ = placeholder_.reduce((a,b) => a + b);
return placeholder_;
}