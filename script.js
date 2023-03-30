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

  function generatePassword() {
    
    var userChoiceLow = confirm("Would you like to use lowercase letters in your password? Select 'ok' or 'cancel' for no");
function lowerCaseCheck () {
  if (userChoiceLow == true)
  {
    alert("let's do some lower case then!")
  }else{
    alert("cool, let's not")
  }
}
lowerCaseCheck();


var userChoiceUpper = confirm("Would you like to use uppercase letters in your password? Select 'ok' or 'cancel' for no");
function upperCaseCheck() {
  if (userChoiceUpper == true) 
  {
    alert("nice, yay, uppercase!")
  
  }else{
    alert("alright, no uppercase")
  }
}
upperCaseCheck();




  var userChoiceSpec = confirm("Would you like to use special characters in your password?");
  
  function checkChoiceSpec() {
    if (userChoiceSpec == true) 
    {
      alert("nice, we love special characters!")
    
    }else{
      alert("alright, fine")
    }
  }
  checkChoiceSpec();

  var userChoiceNum = confirm("Would you like to use numbers in your password?");

 function checkChoiceNum() {
  if (userChoiceNum == true) 
  {
    alert("nice let's add some numbers")
  
  }else{
    alert("fine, no numbers")
  }
}
checkChoiceNum();

var pwdLength =
prompt("How many characters would you like it to be between 8 and 128 characters?");
function checkPwdLength() {
  if (pwdLength >= 8 && pwdLength <=128) {
    alert("Thank you!");
    
  }else{
    alert("Invalid input, please enter a number between 8 and 128");
  }
}
checkPwdLength();

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
return finalPassword
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);