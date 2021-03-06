//#37 Understanding Boolean Values
function welcomeToBooleans() {

    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

//#38 Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  
  if(wasThatTrue){
    return 'Yes, that was true';
  }
  return 'No, that was false';
  
    // Only change code above this line
  
  }

  //#39 Comparison with the Equality Operator
  // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  //#40 Comparison with the Strict Equality Operator
  // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  //#41 Practice comparing different values
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  //#42 Comparison with the Inequality Operator

  // Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//#43 Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//#44 Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//#45 Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//#46 Comparison with the Less Than Operator
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//#47 Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//#48 Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val<=50&&val>=25) {
    
      return "Yes";
    
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//#49 Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  // Only change code below this line

  if (val<10||val>20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//#50 Introducing Else Statements

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//#51 Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }

  else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//#52 Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//#53 Chaining If Else Statements

function testSize(num) {
  // Only change code below this line
  if(num<5){
    return 'Tiny';
  }
  else if(num<10){
    return 'Small';
  }
  else if(num<15){
    return 'Medium';
  }
  else if(num<20){
    return 'Large';
  }
  else if(num>=20){
    return 'Huge';
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);

//#54 Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1) return names[0];
  else if(strokes <= par -2) return names[1];
  else if(strokes === par -1) return names[2];
  else if(strokes === par ) return names[3];
  else if(strokes === par +1) return names[4];
  else if(strokes === par +2) return names[5];
  else if(strokes >= par +3) return names[6];
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//#55 Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
      answer='alpha';
      break;
    case 2:
      answer='beta';
      break;
    case 3:
      answer='gamma';
      break;
    case 4:
      answer='delta';
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//#56 Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch (val){
  case 'a':
    answer = 'apple';
    break;
  case 'b':
    answer = 'bird';
    break;
  case 'c':
    answer = 'cat';
    break;
  default:
    answer = 'stuff';
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//#57 Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = 'Low';
      break;
    case 4:
    case 5:
    case 6:
      answer = 'Mid';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'High';
      break;
  }


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//#58 Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42: 
    answer = "The Answer";
    break;
  case 1: 
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
  

  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//#59 Write Reusable JavaScript with Functions
function reusableFunction (){
  console.log('Hi World');
}

reusableFunction();

//#60 Passing Values to Functions with Arguments
function functionWithArgs (a, b){
  console.log(a+b);
}

functionWithArgs(5,5);

//#61 Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal= 10 ;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//#62 Local Scope and Functions
function myLocalScope() {

  // Only change code below this line
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//#63 Global vs. Local Scope in Functions

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = 'sweater';

  // Only change code above this line
  return outerWear;
}

myOutfit();

//#64 Return a Value from a Function with Return
function timesFive (num){
  return num*5;
}

//#65 Understanding Undefined Value returned from a Function
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

//#66 Assignment with a Returned Value
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

//#67 Stand in Line
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//#68 Returning Boolean Values from Functions

function isLess(a, b) {
  // Only change code below this line
  return a < b;

  // Only change code above this line
}

isLess(10, 15);

//#69 Return Early Pattern for Functions
// Setup
function abTest(a, b) {
  // Only change code below this line
if(a<0||b<0) return;


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//#70 Counting Cards
var count = 0;

function cc(card) {
  // Only change code below this line
  if(card===2||card===3||card===4||card===5||card===6) count+=1;
  if(card===7||card===8||card===9) count+=0;
  if(card===10||card==='J'||card==='Q'||card==='K'||card==='A') {
    count -= 1;
  }

  return `${count} ${count>0?'Bet':'Hold'}`;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//#71 Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();


//#72 Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//#73 Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line


//#74 Build JavaScript ObjectsPassed




