// Assignment code here
var specialCharacters;
var characterAmount;
var numbersChar;
var upperCaseChar;
var lowerCaseChar;
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
      if (lowerCaseChar && caps === 0) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2];
      } else if (upperCaseChar) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2].toUpperCase();
      }
    } else if (numbersChar && i === 1) {
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
      if (lowerCaseChar && caps === 0) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2];
      } else if (upperCaseChar) {
        var i2 = Math.floor(Math.random() * letters.length);
        char = letters[i2].toUpperCase();
      }
    } else if (numbersChar) {
      var i2 = Math.floor(Math.random() * numbers.length);
      char = numbers[i2];
    }
  }
  return char;
}

function generatePassword() {
  var passwordArray = [];
  var i = 0;
  while (true) {
    var char = character();
    if (char) {
      passwordArray[i] = char;
      i++;
    }
    if (passwordArray.length === characterAmount) {
      break;
    }
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
  if (!characterAmount) {
    passwordText.value = "Invalid Input";
    return;
  }
  if (characterAmount > 128) {
    passwordText.value = "Password must be below 128 characters";
  } else if (characterAmount < 8) {
    passwordText.value = "Password must be at least 8 characters";
  } else {
    alert("Use OK for Yes and Cancel for No");
    var typeText = document.querySelector("#types");
    typeText.value = " ";
    lowerCaseChar = window.confirm("Do you want to include lower case letters?");
    if (lowerCaseChar) {
      typeText.value += " lowercase,";
    }
    upperCaseChar = window.confirm("Do you want to include upper case letters?");
    if (upperCaseChar) {
      typeText.value += " uppercase,";
    }
    numbersChar = window.confirm("Do you want to include numbers?");
    if (numbersChar) {
      typeText.value += " numbers,";
    }
    specialCharacters = window.confirm("Do you want special characters?");
    if (specialCharacters) {
      typeText.value += " special characters,";
    }
    if (!lowerCaseChar && !upperCaseChar && !numbersChar && !specialCharacters) {
      passwordText.value = "Invalid Input";
    } else {
      var password = generatePassword();
      passwordText.value = password;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
