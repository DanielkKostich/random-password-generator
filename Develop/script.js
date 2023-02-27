// Assignment code here 
function generatePassword() {
  var retVal = "";
  var charset = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numericCase = "0123456789"
  var specialCase = "!@#$%&+"
  var long = window.prompt("How long? 8-128")
  if (long < 8 || long > 128 || isNaN(long) ){
    window.alert("Invalid") 
    return ""
  }
  
 var useLower = window.confirm("use lowercase?")
  if (useLower){
    charset+= lowerCase
  }

  var useUpper = window.confirm("use Uppercase?")
  if (useLower){
    charset+= upperCase
  }

  var useNumeric = window.confirm("use Numbers?")
  if (useLower){
    charset+= numericCase
  }

  var useSpecial = window.confirm("use Special characters?")
  if (useLower){
    charset+= specialCase
  }

if (useLower + useUpper + useNumeric + useSpecial  <1){
  window.alert("Please choose on type")
}
  
  for (var i = 0; i < long; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return retVal;
}
var generateButton = document.createElement("button");





// function promptMe(){

//       var num = prompt("password lenth");

//   if (!isNaN(num)){  

//     var char = prompt("Char type")

//   if (char == null){
//       alert("invalid")
//       promptMe()
//   }
//   if (!isNaN(char) ){
//     alert("invalal")
//     promptMe()
// }
// }


//   else { alert("Invalid Input.") 
//       promptMe()
//     }


//   }









// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", prompt("hello"))
generateBtn.addEventListener("click", writePassword);
