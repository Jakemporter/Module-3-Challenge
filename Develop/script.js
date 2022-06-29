// Assignment code here
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// if (generateBtn.addEventListener("click", true)) {
// }
var specialCharacters = window.confirm("Do you want special characters? OK for Yes, Cancel for No");
var characters = window.prompt("How many characters?");
characters = parseInt(characters);
