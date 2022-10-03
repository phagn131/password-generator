// Assignment code here

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1-rand) + rand*max)
    }

function getRandomItem(list) {
    return list[randomInt(list.length)]
    }

function generatePassword() {
var userInput = ""    
var userInput = window.prompt("How many charachters long do you want your password to be?")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)){ 
    window.alert("Must input number!")
    return
    }
if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a number between 8 and 128 charachters")
    return
    }

var userSelectsLower = window.confirm("Would you like to include lowercase letters in your password? Press OK for yes or Cancel for no") 
console.log(userSelectsLower)
var userSelectsUpper = window.confirm("Would you like to include uppercase letters in your password? Press OK for yes or Cancel for no")
console.log(userSelectsUpper)
var userSelectsNumbers = window.confirm("Would you like to include numbers in your password? Press OK for yes or Cancel for no")
console.log(userSelectsNumbers)
var userSelectsspecialCharachters = window.confirm("Would you like to include special charachters in your password? Press OK for yes or Cancel for no")
console.log(userSelectsspecialCharachters)

//set an array for the allowable input ***ADD quotes to array or find shortcut
const lowerList = arrayFromLowToHigh(65, 90) //["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperList = arrayFromLowToHigh(97, 122)//["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y", "Z"]
const numbersList = arrayFromLowToHigh(48, 57)//["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialList = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))//["!", "#", "$", "%", "&","'", "(", ")", "*","+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "["]
String.fromCharCode()
let charCodes = lowerList
if (upperList) charCodes = charCodes.concat
(upperList)
if (numbersList) charCodes = charCodes.concat(numbersList)
if (specialList) charCodes = charCodes.concat(specialList)

//for (let i = 0; i < passwordLength, i++){

//}

function arrayFromLowToHigh(low, high){
const array = []
for (let i = low; i <= high; i++){
  array.push(i)      
}
return array
}


var optionsCart = []
console.log(optionsCart)

if (userSelectsLower === true) {
    optionsCart.push(lowerList)
    }

if (userSelectsUpper === true) {
    optionsCart.push(upperList)
    }

if (userSelectsNumbers === true) {
    optionsCart.push(numbersList)
    }

if (userSelectsspecialCharachters === true) {
    optionsCart.push(specialList)
    }

if (optionsCart.length === 0) {
    window.alert("Please select at least 1 charachter from the criteria")
    return
    }

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
    }
    

return generatedPassword

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
