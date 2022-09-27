// Assignment code here
// adding various methods, variables from class to jumpstart assignment
//document.body;
//console.log(main);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//write password to the assignment input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);