setInterval(()=>{

// console.log(`add: alsoInput ${alsoInput} inputSum: ${inputSum} previousValue: ${previousValue} actual_previousValue: ${actual_previousValue} isPair: ${isPair}`) 
// console.log(`currentValue.length ${currentValue.length} history ${history} history.length ${history.length}`)

// console.log(`evaluation03() ${evaluation03()} evaluation04 ${evaluation04()} unaltered_history ${unaltered_history} evaluation05 ${evaluation05()} history ${history}`)
// console.log(`absolute_history ${absolute_history} history ${history} unaltered_history ${unaltered_history}
// convertArray ${convertArray()}`)
// console.log(`history ${history} filtered_history ${filtered_history()} repeats ${repeats}`)
// console.log(`${alsoAlso_inputCopy}`)
// console.log({behaviour04})

// console.log(`${target.id}`)
},100)

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
let behaviour00 = false;
let behaviour01 = false;
let behaviour02 = false;
let behaviour03 = false;
let behaviour04 = false;

let repeats = false;
let iteration = 0;

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
let valueRemoved;

const input_field = document.querySelector("div > input");
input_field.value = "";
const operands = document.querySelectorAll("#numpad > button");

 const arithmetic_functions = [...document.querySelectorAll(".functions > div > button")]
 for(let i = 0; i < arithmetic_functions.length; i++){
 arithmetic_functions[i].addEventListener('click', arithmetic);
}
// DOES ARITHMETIC GET DISABLE LATER? - if so do for each ""

let values = {};
let values_indices = 0;
let placeholder_ = [];
let previous_value;

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

input_field.value = alsoInput; behaviour01 = false;
behaviour02 = false; behaviour03 = false;
repeats = false; iteration = 0;
});

const functions_equals = document.querySelector(".assignment03 > button").addEventListener('click', (e) => {
behaviour04 = false;
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


operands.forEach((button,instance) => {
button.addEventListener('click', someDamnedFunction = (e) => {
console.log(instance)
buttons_click(e);
});
})

window.addEventListener("keyup", keyboard_input);
function keyboard_input(e) {
console.log(e.target.textContent) // ditto for later*

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
// could create separate event listener for "." if no immediate method to remove instantiation*

actual_previousValue = previousValue;
previousValue = +e.target.textContent;
unaltered_history.push(previousValue);
absolute_history.push(previousValue);
convertArray(); // RECENTLY ADDED*

if([...input_field.value].filter((value) => isNaN(value)).length == 1){

// CREATE PARALELLE INVOCATION FOR REFERENCE, UNABLE TO REMOVE COMBINATION OF LOOP WITH ANONYMOUS FUNC...


operands.forEach((button,instance) => {
button[10].removeEventListener('click', someDamnedFunction = (e) => { // function likely needs to be named*
console.log(instance)
buttons_click(e);
});
})

}

if(previousValue == "=" && typeof actual_previousValue == "number") {
functions_all_clear.click();

} else if(isPair == true) {
input_field.value = "";

inputSum += e.target.textContent;
input_field.value = inputSum;

} else {
if(e.target.textContent > 0 || behaviour04 == true) { 
alsoInput += e.target.textContent;
input_field.value = alsoInput;
behaviour04 = true;}
}
}


function operand_delete(e){
console.log('delete')
if(actual_previousValue !== "=") {
if((e.key == "Backspace" && isPair == false ) || (e.target.textContent == "DEL" && isPair == false)) { console.log('pairs01')

alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);

alsoInput = +alsoInput;
input_field.value = alsoInput;

// values[evaluation05()] = values[evaluation05()].slice(0,values[evaluation05()].length-1);   // RECENTLY ADDED***


if(alsoInput == 0) {
alsoInput = alsoInput + "";
alsoInput = alsoInput.slice(0, alsoInput.length -1);
input_field.value = alsoInput;}}


if((e.key == "Backspace" && isPair == true) || (e.target.textContent == "DEL" && isPair == true)) { console.log('pairs02') // CURRENT

inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);

// code that checks the current iteration "+", slices, from the index of that same iteration; corrects the sum (may need to return values to object UNDETERMINED)
// values[evaluation05()].slice(values[evaluation05()].length-1);

values[evaluation05()] = values[evaluation05()].slice(0,values[evaluation05()].length-1);   // RECENTLY ADDED***
// find responsible line of code for cumulative assignments*


inputSum = +inputSum;
input_field.value = inputSum;

if(inputSum == 0) {
inputSum = inputSum + "";
inputSum = inputSum.slice(0, inputSum.length -1);
input_field.value = inputSum;
}}
}}

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
} else if (inputSum > 0 && alsoInput == 0 && evaluation05() < 2) { console.log('reached04')


filtered_history().reduce((a,b) => { // MAY require reset on new assignment*
if(a == b && iteration < 2) {repeats = true}
iteration++
return repeats;
})

if(currentOperator.length % 2 == 1 && currentOperator.length < 4) { console.log('EXECUTED00')
unaltered_history.splice(0,alsoLength,alsoInput_copy); // ??? CURRENT
unaltered_history.push(alsoAlso_inputCopy[0]);
}

if(history[history.length-2] == '' && behaviour02 == false && repeats == false){ console.log('EXECUTED01')
unaltered_history.push(alsoInput_copy);
behaviour02 = true;
}
if(history[2] == ''){ console.log('EXECUTED02')
unaltered_history.push(alsoInput_copy);
if(history.length == 5) {unaltered_history.push(alsoInput_copy)}

} else if (history[2] !== '') { console.log('EXECUTED03')
absolute_history.push(alsoInput_copy);
if(history.length > 3) {unaltered_history.push(alsoAlso_inputCopy[0])}
}

input_field.value = unaltered_history.reduce((a,b) => +a + +b);
inputSum = +input_field.value;

// on DEL, values not being joined* - on DEL, then possible wrong sum*
} else if(evaluation05() > 1) { console.log('reached05');
setTimeout(() => { console.log('030')

for(let i = history.length; i > 0; i--) {
if(history[i-1] !== '' && typeof history[i] == 'number' && typeof history[i-1] !== 'number'){
beforeCumulative = history[i-1];
break;}}

// WARN conditional is based on separate async operation at the same time as execution, see here*
if(typeof history[history.length-3] == 'string' && typeof history[history.length-2] == 'string' && typeof history[history.length-1] == 'number') { console.log('do nothing')


} else { console.log('do something / convertArray()')
absolute_history.push(+beforeCumulative);
unaltered_history.push(+beforeCumulative);
}


input_field.value = convertArray();
behaviour00 = false;
}, 1)} 

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


function convertArray(){ console.log('called')
values = {};
values_indices = 0;
placeholder_ = [];
previous_value;

for(let j = 0; j < absolute_history.length; j++) {
if(typeof absolute_history[j] == 'number') { 

if(!values[values_indices]){ console.log('values updated')
values[values_indices] = [];
}

if(!values[values_indices] == []){
values[values_indices].push(absolute_history[j]+"");
}

} else if(typeof absolute_history[j] == 'string' && typeof previous_value !== typeof absolute_history[j]) {
values_indices++;}

previous_value = absolute_history[j]; // forces consecutive incrementation for operators WAS 0,1,4
} // for (closing above)

for(let key in values) {
values[key] = values[key].join('');
placeholder_.push(+values[key]);
}

placeholder_ = placeholder_.reduce((a,b) => a + b);
return placeholder_;
}