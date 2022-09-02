// // Assignment Code
var generateBtn = document.querySelector("#generate");
var Uppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var Lowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var Symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '}', '{'];
function randomGen(arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  var randomi = arr[randomNumber];
  return randomi;
  
}
// Prompts for users 
function generatePassword() {
  var length = prompt("How many characters would you like?")
  if (length < 8 || length > 128) {
    alert("Not enough characters,must be betwenn 8 and 128.")
   
    
  };
  if (8 <= length <= 128) {
    var uppercase = confirm("Do you want uppercase?");
    var lowercase = confirm("Do you want lowercase?");
    var number = confirm("Do you want number?");
    var symbols = confirm("Do you want special characters?");
    
  };
   if (uppercase != true && lowercase != true  && number != true && symbols) {
    alert("You must select one.")
  };
 
// give value to if
var key = {"uppercase":uppercase, "lowercase":lowercase, "number":number,  "symbols":symbols}
var possableChar = []
var randomPassword = "";
var characters=[];

if (uppercase === true) {
  characters = characters.concat(Uppercases);
};
if (lowercase === true ) {
  characters = characters.concat(Lowercases);
};
if (number === true) {
  characters = characters.concat(Numbers);
};
if (symbols === true) {
  characters = characters.concat(Symbols);
};
 for (var index = 0; index < characters.length; index++) {
  var element = randomGen(characters);
  possableChar.push(element)
 }

for (var i=0; i < length; i++ ){
  
 
 
  var randomidem = randomGen(possableChar);
  
  randomPassword += randomidem;
};  

return randomPassword;

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
