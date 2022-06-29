// Assignment code here
var specialCharacters;
var characterAmount;
function character() {
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
        character = letters[i2];
      } else {
        var i2 = Math.floor(Math.random() * letters.length);
        character = letters[i2].toUpperCase;
      }
    } else if (i === 1) {
      var i2 = Math.floor(Math.random() * numbers.length);
      character = numbers[i2];
    } else {
      var i2 = Math.floor(Math.random() * characters.length);
      character = characters[i2];
    }
  } else {
    var i = Math.floor(Math.random() * 2);
    if (i === 0) {
      caps = Math.floor(Math.random() * 2);
      if (caps === 0) {
        var i2 = Math.floor(Math.random() * letters.length);
        character = letters[i2];
      } else {
        var i2 = Math.floor(Math.random() * letters.length);
        character = letters[i2].toUpperCase;
      }
    } else {
      var i2 = Math.floor(Math.random() * numbers.length);
      character = numbers[i2];
    }
  }
  return character;
}

function generatePassword() {
  var password = [];
  for (i = 0; i < characterAmount.length; ) {
    password[i].push(character());
  }
  password = password.join("");
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  characterAmount = window.prompt("How many characters?");
  characterAmount = parseInt(characters);
  specialCharacters = window.confirm("Do you want special characters? OK for Yes, Cancel for No");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
