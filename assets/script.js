// Assignment code here
// adding various methods, variables from class to jumpstart assignment
//document.body;
//alert("hello world"); check script works in console

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
 var userInput = window.prompt("Choose the password criteria by clicking ok");
 console.log(userInput)  
 var userInput = window.prompt("Type in a password length between 8 and 128 charachters?")
 var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
    window.alert("Must input number!")
    return
 } 
 console.log(userInput)  
 var userInput = window.prompt("Do you want to include lowercase letters?")
 console.log(userInput)  
 var userInput = window.prompt("Do you want to include uppercase letters?")
 console.log(userInput)  
 var userInput = window.prompt("Do you want to include numbers?")
 console.log(userInput)  
 var userInput = window.prompt("Do you want to include special charachters?")
 console.log(userInput)

}
//write password to the assignment input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);