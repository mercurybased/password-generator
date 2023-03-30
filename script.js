// Assignment code here
// will have to make arrays of lower and upper letters, numbers, and symbols

var lowercaseAlphabets = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
console.log(lowercaseAlphabets);
var uppercaseAlphabets = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
console.log(uppercaseAlphabets);
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];
console.log(specialCharacters);
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9",]
console.log(numbers);
var allCharacters = (lowercaseAlphabets, uppercaseAlphabets, specialCharacters, numbers)

var userInput = 0;


var userChoiceLow = confirm("Would you like to use lowercase letters in your password? Select 'ok' or 'cancel' for no");

function userChoiceLow() {
  if (userChoiceLow == true) 
  {
    alert("nice, lowercase letters it is")
  
  }else{
    alert("alright, no lowercase")
  }
}
console.log('userChoiceLow', userChoiceLow);


var userChoiceUpper = confirm("Would you like to use uppercase letters in your password? Select 'ok' or 'cancel' for no");

function userChoiceUpper() {
  if (userChoiceUpper == true) 
  {
    alert("nice, yay, uppercase!")
  
  }else{
    alert("alright, no uppercase")
  }
}
console.log('userChoiceUpper', userChoiceUpper);




  var userChoiceSpec = confirm("Would you like to use special characters in your password?");
  console.log('userChoiceSpec', userChoiceSpec);
  function userChoiceSpec() {
    if (userChoiceSpec == true) 
    {
      alert("nice, we love special characters!")
    
    }else{
      alert("alright, fine")
    }
  }

  var userChoiceNum = confirm("Would you like to use numbers in your password?");
  console.log('userChoiceNum', userChoiceNum);
  var userChoiceLow = confirm("Would you like to use lowercase letters in your password? Select 'ok' or 'cancel' for no");

function userChoiceNum() {
  if (userChoiceNum == true) 
  {
    alert("nice let's add some numbers")
  
  }else{
    alert("fine, no numbers")
  }
}
console.log('userChoiceNum', userChoiceNum);

var pwdLength =
prompt("How many characters would you like it to be between 8 and 128 characters?");
console.log(pwdLength)

  if (pwdLength >= 8 && pwdLength <=128) {
    alert("Thank you!");

  }else {
    alert("Invalid input, please enter a number between 8 and 128");
  }
  var finalPassword = ""
  var combinedArray = []
  if (userChoiceSpec) {
    combinedArray= combinedArray.concat(specialCharacters)
  }
  if (userChoiceLow) {
    combinedArray = combinedArray.concat(lowercaseAlphabets)
  }
  if (userChoiceUpper) {
    combinedArray = combinedArray.concat(uppercaseAlphabets)
  }
  if (userChoiceNum) {
    combinedArray = combinedArray.concat(numbers)
  }

  for (var i = 0; i < pwdLength; i++) {
    var randomCharacter = combinedArray [Math.floor(Math.random()*combinedArray.length)]
    finalPassword += randomCharacter
  }
console.log(finalPassword)

  // var randomLowerCase = lowercaseAlphabets[randomInput]
  // var randomInput = Math.floor(Math.random() * pwdLength.length);
  // var randomLowerCase = lowercaseAlphabets[randomInput]
  // console.log (randomLowerCase)
  
  
  // var randomLet = Math.floor(Math.random() * lowercaseAlphabets.length);
  // var randomLetter = lowercaseAlphabets[randomLet];
  // console.log(randomLetter);
  
  // var randomUpper = Math.floor(Math.random() * uppercaseAlphabets.length);
  // var randomUpperLetter = uppercaseAlphabets[randomUpper];
  // console.log(randomUpperLetter);
  
  // var randomSym = Math.floor(Math.random() * specialCharacters.length);
  // var randomSpeC = specialCharacters[randomSym];
  // console.log(randomSpeC);
  
  // var randomNum = Math.floor(Math.random() * numbers.length);
  // var randomNumber = numbers[randomNum];
  // console.log(randomNumber);

  function generatePassword() {
    var password = ""
  }
  
  
  
// var randomIdx = Math.floor(Math.random()*lowercaseAlphabets.length);
// var userCHoice  = lowercaseAlphabets[randomIdx];

// prompt for password login is a number
// if statements if number is above 8 && below 128
// confirm for lowercase, uppercase, numeric and special characters
// store their response in a variable
// if statement for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far
// for loop while i is less than their answer for num length prompt (so the for loop will run for each character)
//in this for loop we would randomly pull characters from the big array
//pull random characters from the array using math.random
//have a variable declared above for loop
//that var += theRandomChar
//return the password var
//not required to have all requirements in said password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
  
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);