// Assignment Code
var generateBtn = document.querySelector("#generate");
// comment
// Lower case alphabet lettes to use in password
var alphaLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Upper case alphabet to use in password 
var alphaUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Numbers to use in password
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special symbols to use in password
var Specialsymbols = ["!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//Stores what the password length is in the memory
var passwordLength; 
//Lines 16, 18, 20, 22, and 24 Stores the boolean response for each variable on those lines. 
var useLower;
// refer to comment on line 15
var useUpper;
// refer to comment on line 15
var useNumbers;
// refer to comment on line 15
var useSpecial;

var passwordOptions;

var passwordArray = [];
var password = "";

var validEntry = false;
function generatePassword(){
// Sets up the password length based on the prompt
validEntry = false;
while (validEntry=== false) {
  var passwordLength = prompt("How many characters would you like to use? Please enter between 8 and 128 characters.");
 
  if (passwordLength < 8 || passwordLength > 128) {
     alert("Please enter a number between 8 and 128");
    validEntry = false;
  } else {
    validEntry = true;
    prompt = passwordLength;
  }
}
}

console.log("Your password will be: " + passwordLength + " chracters long.")

var useSpecialsymbols = confirm("Would you like to include special characters in your password?");
console.log("Using special symbol characters: " + useSpecialsymbols + ".");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
