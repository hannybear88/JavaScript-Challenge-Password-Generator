// Special symbols to use in password
var useSpecialCharactersArray =  [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numbers to use in password
var useNumericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Lower case alphabet lettes to use in password
var useAlphaLowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Upper case alphabet to use in password 
var useAlphaUppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



var passwordLength = 8;
var passwordArray = []; 


// Generates Password Button
var generateBtn = document.querySelector("#generate");

// Resets Password Button
var resetBtn = document.querySelector("#reset")

//
var passwordText = document.querySelector("#password");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Add event listener to reset button
resetBtn.addEventListener("click", resetPassword); 




// Resets password
function resetPassword() {
passwordText.value = ""; 
}

// Write password to the #password input
function writePassword() {
  var validEntry = getPrompts();
  var passwordText = document.querySelector("#password");
  var passwordArray = "";

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
    passwordLength = parseInt(
      prompt(
      "How many characters would you like to use? Please enter between 8 and 128 characters."
      )
    );

    if(passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password length must be between 8 and 128 characters. Please try again."
      );
    return false;
  }

  // Variable to store boolean regarding the includsion of special characters. 
    var uuseSpecialCharactersArray = confirm(
      "Click OK to confirm that you would like to include special characters in your password."
    );

  // Variable to store boolean regarding the includsion of numberic characters. 
  var useAlphaLowercaseArray = confirm(
    "Click OK to confirm that you would like to include lowercase letters in your password."
  );

  // Variable to store boolean regarding the includsion of lowercase letters. 
  var useAlphaUppercaseArray = confirm(
    "Click OK to confirm that you would like to include uppercase letters in your password."
  );

  // Variable to store boolean regarding the inclusion of uppercase letters. 
  var useNumbericArray = confirm(
    "Click OK to confirm that you would like to include numbers in your password."
  );
  
  if (

    useSpecialCharactersArray === false &&
    useNumericArray === false &&
    useAlphaLowercaseArray === false &&
    useAlphaUppercaseArray === false
  ) {

    alert("ERROR! You did not choose a password criteria. You must choose at least one.");
    alert("Congratulations! You have auspiciously created a secure password! ");
    return null;
  }
    var passwordArray; {
    useAlphaLowercaseArray:useAlphaLowercaseArray;
    useAlphaUppercaseArray:useAlphaUppercaseArray;
    useNumbericArray:useNumbericArray;
    useSpecialCharactersArray:useSpecialCharactersArray;
    };

    return passwordArray 
}


// Copy to Clipboard Button
var copy = document.querySelector("#copy");
//Add event listener to copy button
copyBtn.addEventListener("click",function() {
  copyPassword()
});

  // Copies password to clipboard
  function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Your new password has been copied to your clipboard!");
  }

