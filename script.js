// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var char = "";
var passwordCharSet = "";

// Function to prompt user for password options
function getPasswordOptions() {
  char = parseInt(
    window.prompt("Enter a number from 10 to 64 for password length.")
  );

  var lowerCasedCharacters = window.confirm(
    "Would you like to use lowercase letters?"
  );
  if (lowerCasedCharacters) {
    passwordCharSet += lowerCasedCharacters;
  }

  var upperCasedCharacters = window.confirm(
    "Would you like to use uppercase letters?"
  );
  if (upperCasedCharacters) {
    passwordCharSet += upperCasedCharacters;
  }

  var specialCharacters = window.confirm("Would you like to use symbols?");
  if (specialCharacters) {
    passwordCharSet += specialCharacters;
  }

  var numericCharacters = window.confirm("Would you like to use numbers?");
  if (numericCharacters) {
    passwordCharSet += numericCharacters;
  }
}
getPasswordOptions();

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (i = 0; i < passwordCharSet.length; i++) {
    password +=
      passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  }
  return password;
}

console.log(generatePassword());

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
