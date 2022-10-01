// Assignment code here

var generateBtn = document.querySelector("#generate");


function generatePassword(){

var userInput = window.prompt("How many charachters long do you want your password to be?")

var passwordLength = parseInt(userInput)
 
if (isNaN(passwordLength)) {
    window.alert("Must input number!")
    return
}
    if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128 charachters")
    return
}
    if (passwordLength >= 8 && passwordLength < 128) {
    window.alert("choose the following charachters for your password")
    
}

    window.confirm("Would you like to include lowercase letters in your password? Press OK for yes or Cancel for no") 

    window.confirm("Would you like to include uppercase letters in your password? Press OK for yes or Cancel for no")

    window.confirm("Would you like to include numbers in your password? Press OK for yes or Cancel for no")

    window.confirm("Would you like to include special charachters in your password? Press OK for yes or Cancel for no")
}

/*var userSelectsLower = window.confirm("Would you like to include lowercase letters in your password?")
console.log(userSelectsLower)
var userSelectsUpper = window.confirm("Would you like to include uppercase letters in your password?")

var userSelectsNumbers = window.confirm("Would you like to include numbers in your password?")

var userSelectsSpecialCharachters = window.confirm("Would you like to include special charachters in your password?") */
var userSelectsLower
var userSelectsUpper
var userSelectsNumbers
var userSelectsSpecialCharachters

/*set an array for the allowable input ***ADD quotes to array or find shortcut
var lowerList = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y", "Z"]
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharList = ["!", "#", "$", "%", "&","'", "(", ")", "*","+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "["] 

var choicesList = []

if (userSelectsLower === true) {
    choicesList.push(lowerList)
}

if (userSelectsUpper === true) {
    choicesList.push(upperList)
}

if (userSelectsNumbers === true) {
    choicesList.push(numbersList)
}

if (userSelectsLower === true) {
    choicesList.push(lowerList)
}

if (choicesList === 0) {
    choicesList.push(lowerList)
}

var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomChoice = getRandomItem(choicesList)
    var randomChar = getRandomItem(randomChoice)
    generatedPassword += randomChar
}

*/
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
