// Assignment code here
//document.body;
//console.log(main);
var password=document.getElementById("password");
var numbers = "0123456789";
var specialCharachters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passwordLength = 8-128 

console.log(testconsole);

//charachter length
for (var i = 0; i < password.length; i++){
var randomNumber = Math.floor(parseInt(userNumber))(Math.random() * options.length);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var index = Math.floor(Math.random() * options.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);