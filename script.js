// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphaLowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphaUpArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "<", ">", "?", "/", ";", ":"];

// generate password 
function generatePassword() {
  var passwordLength = window.prompt ("How many characters would you like in your password?");
  console.log(passwordLength)

  var passwordArray = [];
  var finalPassword = [];

    while (passwordLength < 8 || passwordLength > 128) {
      alert ("Your password length must be between 8 and 128 characters. Please try again!");
      passwordLength = window.prompt ("How many characters would you like in your password?");
    }
      var alphaLowChar = confirm ("Would you like your password to contain lowercase characters?");
      var alphaUpChar = confirm ("Would you like your password to contain Uppercase characters?");
      var numericChar = confirm ("Would you like your password to contain numeric characters?");
      var specChar = confirm ("Would you like your password to contain special characters?");
  
// if 'ok' to lowercase then select lowercase array and put it into the password  
    if (alphaLowChar === true) {
      for (var i = 0; i < alphaLowArray.length; i++) { 
      passwordArray.push(alphaLowArray[i])
    }
  }
    if (alphaUpChar === true) {
      for (var i = 0; i < alphaUpArray.length; i++) { 
      passwordArray.push(alphaUpArray[i])
    }
  }
  // numericChar
  // specChar
    console.log(passwordArray)

    // for loop 
    // blank random characters out of password array 

     for (var i = 0; i < passwordLength; i++) {
       var randomNum = Math.floor(Math.random() * passwordArray.length)
       finalPassword.push(passwordArray[randomNum])
       }

       console.log(finalPassword);

      //  remove the commas 





return finalPassword; 

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt


// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page