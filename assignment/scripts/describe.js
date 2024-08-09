// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
  */




// 1. WRITE YOUR DESCRIPTION HERE
// We declared a variable called name and set it to Dane.
// Then we test with conditional statement if the name variable is equal to 'Marry'.
//Afterward we console.log Hi Mary!. 
// And then we console.log how do you do? 
//in this case, name is set Dane.
// Therefore it will execute the second block of the statement 
// The output will be how do you do?

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared variable called secret, and didn't set anything to it.
// We declared variable called code and initialized with the number 123.
// Then we have conditional statement that checks if code is equal to 123.
// Since it's true, we assign the variable secret to super.
// And then the variable code is multiplied to 2.
// Next we have another conditional statement to check if code is greater than 250.
// if secret variable is true, we set it to duper.
// Since code is not greater than 250, it will not execute.
// lastly we console.log secret
// the output will be super 


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare three variable named isStudent, age and zib and we initialized all three. 
// We test if isStudent is true AND zip is greater than 80000. we console.log `You're a student on the West Coast!`.
// We then check else if condition if isStudent is false AND age is less than 30. we console.log what are your hobbies. 
// Next we check if isStudent is true and console.log welcome to Prime.
// lastly, we have another console.log 'how about the weather.
// this code will output welcome to Prime .

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// fix colorONe should be set to blue 
let colorOne = 'red';
//colorTow should be set to red 
let colorTwo = 'blue';
let mix = true;
// solution: we only set colorOne to Purple , we also need to set colorTwo purple as described above
if (mix === true) {
// correcting to set both colors .
  colorOne = 'purple';
  ColorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// potential solution: we should use and(&&) logical operator instead of or ||. console.log throw away food 
//fixed: logical operator && 
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// -- there is a logical error in our code, since we want people over 21 to enter.
// fixed age is greater or equal 
if(age >=minAge) {
//we went people over the minAge to gain entry so we console,log entry 
  console.log('enter');
} else {
 // deny entry if age is under 21 
  console.log(' no entry');
}
  // it will output enter 
*/

