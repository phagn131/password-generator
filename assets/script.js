/* Assignment code here
//set variables for each function (use var to run on older browsers)
//use if else statements
//math operator to generate random assignment to numbers, text and special charachters
//use window.prompt for user input
// Get references to the #generate element*/
var generateBtn = document.querySelector("#generate");

function generatePassword(){

//set variable for password length
var userInput = window.prompt("How long do you want your password?") 

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
    window.alert("Must input number!")
    return
}


    if (passwordLength < 8 || passwordLength > 128)
    window.alert("Length of Password must be between 8 and 128 charachters")
    return
 }
//add 4 prompt messages 


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
