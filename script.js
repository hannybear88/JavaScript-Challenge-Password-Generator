// Lower case alphabet lettes to use in password
var alphaLowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Upper case alphabet to use in password 
var alphaUppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Numbers to use in password
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Special symbols to use in password
var specialCharactersArray =  [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var passwordLength = 8;
var passwordArray = [];

// Assignment Code
// Generate Password
var generateBtn = document.querySelector("#generate");
// Resets Password
var resetBtn = document.querySelector("#reset")

var passwordText = document.querySelector("#password");
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Add event listener to reset button
resetBtn.addEventListener("click", resetPassword); 


// resets password
function resetPassword() {
  passwordText.value = "";
 
}
// Write password to the #password input
function writePassword() {
  var validEntry = getPrompts();
  var passwordText = document.querySelector("#password");

 
if (validEntry) {
  var reGeneratedPassword = generatePassword();
  passwordText.value = reGeneratedPassword;
} else { 
  passwordText.value = "";
}
}

function generatePassword() {
//Generates the password length based on the prompt
var password = "";
for(var i = 0; i < passwordLength; i++) {
    var randomCharacters = Math.floor (Math.random() * passwordArray.length);
    password = password + passwordArray[randomCharacters];
  }
  return password;
}

function getPrompts(){
    passwordArray = [];
    passwordLength = parseInt(prompt("How many characters would you like to use? Please enter between 8 and 128 characters."));

    if(passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again.");
    return false;
 }

  if (confirm("Would you like to include special characters in your password?")) {
   passwordArray = passwordArray.concat(specialCharactersArray);
  }

  if (confirm("Would you like to include numbers in your password?")) {
   passwordArray = passwordArray.concat(numbersArray);
  }

  if (confirm("Would you like to include lowercase letters in your password?")) {
  passwordArray = passwordArray.concat(alphaLowercaseArray);
  }

  if (confirm("Would you like to include uppercase letters in your password?")) {
    passwordArray = passwordArray.concat(alphaUppercaseArray);
  }
  return true;
}