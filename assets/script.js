// Assignment code here
// Returns the firt element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = "";
  var userInput = window.prompt(
    "How many charachters long do you want your password to be?"
  );

  var passwordLength = parseInt(userInput);
  // If user does not enter a number alert user to input number
  if (isNaN(passwordLength)) {
    window.alert("Must input number!");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128 charachters");
    return;
  }
  // Use window alerts to confirm selections
  var userSelectsLower = window.confirm(
    "Would you like to include lowercase letters in your password? Press OK for yes or Cancel for no"
  );
  console.log(userSelectsLower);
  var userSelectsUpper = window.confirm(
    "Would you like to include uppercase letters in your password? Press OK for yes or Cancel for no"
  );
  console.log(userSelectsUpper);
  var userSelectsNumbers = window.confirm(
    "Would you like to include numbers in your password? Press OK for yes or Cancel for no"
  );
  console.log(userSelectsNumbers);
  var userSelectsspecialCharachters = window.confirm(
    "Would you like to include special charachters in your password? Press OK for yes or Cancel for no"
  );
  console.log(userSelectsspecialCharachters);

  //set an array for the allowable input, 
  // Lowercase letters, Uppercase letters, Numbers and Special charachters
  // ***ADD quotes to array or find shortcut
  var lowerList = [
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
  var upperList = [
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
  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialList = [
    "!",
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
  ];
  // Sets a variable for the array
  var optionsCart = [];
  console.log(optionsCart);
  // takes user input and adds to the end of the array with each char set
  if (userSelectsLower === true) {
    optionsCart.push(lowerList);
  }

  if (userSelectsUpper === true) {
    optionsCart.push(upperList);
  }

  if (userSelectsNumbers === true) {
    optionsCart.push(numbersList);
  }

  if (userSelectsspecialCharachters === true) {
    optionsCart.push(specialList);
  }
  // If no item is selected alert user to select a charchter
  if (optionsCart.length === 0) {
    window.alert("Please select at least 1 charachter from the criteria");
    return;
  }
  // generates random number
  function randomInt(min, max) {
    if (!max) {
      max = min;
      min = 0;
    }
    var rand = Math.random();
    return Math.floor(min * (1 - rand) + rand * max);
  }
  // takes list and returns a random value for an item in the array
  function getRandomItem(list) {
    return list[randomInt(list.length)];
  }

  var generatedPassword = "";
  // For loop to iterate the random char through the password length
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}
// Initiate write password, generates the password and renders text to screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
