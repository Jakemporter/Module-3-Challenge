// Assignment code here
var specialCharacters;
var characterAmount;
function character() {
  var char;
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var characters = [
    "!",
    `"`,
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "}",
    "|",
    "~",
  ];
  if (specialCharacters) {
    var i = Math.floor(Math.random() * 3);
    if (i === 0) {
      caps = Math.floor(Math.random() * 2);
      if (caps === 0) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2];
      } else {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2].toUpperCase();
      }
    } else if (i === 1) {
      var i2 = Math.floor(Math.random() * numbers.length);
      char = numbers[i2];
    } else {
      var i2 = Math.floor(Math.random() * characters.length);
      char = characters[i2];
    }
  } else {
    var i = Math.floor(Math.random() * 2);
    if (i === 0) {
      caps = Math.floor(Math.random() * 2);
      if (caps === 0) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2];
      } else {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2].toUpperCase();
      }
    } else {
      var i2 = Math.floor(Math.random() * numbers.length);
      char = numbers[i2];
    }
  }
  return char;
}

function generatePassword() {
  var passwordArray = [];
  var i = 0;
  while (i < characterAmount) {
    passwordArray[i] = character();
    i++;
  }
  passwordArray = passwordArray.join("");
  return passwordArray;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characterAmount = window.prompt("How many characters?");
  characterAmount = parseInt(characterAmount);
  var passwordText = document.querySelector("#password");
  if (characterAmount > 128) {
    passwordText.value = "Password must be below 128 characters";
  } else {
    specialCharacters = window.confirm("Do you want special characters? OK for Yes, Cancel for No");
    var password = generatePassword();
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
