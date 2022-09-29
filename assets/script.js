/* Assignment code here
//set variables for each function (use var to run on older browsers)
//use if else statements
//math operator to generate random assignment to numbers, text and special charachters
//use window.prompt for user input
// Get references to the #generate element*/
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//set variable for password length
var userInput = window.prompt("How many charachters long do you want your password to be?") 

var passwordLength = parseInt(userInput)
//use not a number if user inputs invalid type
if (isNaN(passwordLength)) {
    window.alert("Must input number!")
    return
}
    if (passwordLength < 8 || passwordLength > 128)
    window.alert("Please enter a number between 8 and 128")
    return
 }
//add 4 prompt messages then add if else statements 

var userSelectsNumbers = window.prompt("Would you like to include lowercase letters?")
var userSelectsNumbers = window.prompt("Would you like to include uppercase letters?")
var userSelectsNumbers = window.prompt("Would you like to include numbers?")
var userSelectsNumbers = window.prompt("Would you like to include special charachters?")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
