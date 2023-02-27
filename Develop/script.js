// Assignment code here 
function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&+",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
var generateButton = document.createElement("button");
     


document.querySelector('#generate').addEventListener('click', promptMe);


function promptMe(){
     	  
      var num = prompt("password lenth");
      
  if (!isNaN(num)){  
   
    var char = prompt("Char type")
  
  if (char == null){
      alert("invalid")
      promptMe()
  }
  if (!isNaN(char) ){
    alert("invalal")
    promptMe()
}
}
   
  
  else { alert("Invalid Input.") 
      promptMe()
    }

   
  



      
  }


const value = document.querySelector("prompt")






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
generateBtn.addEventListener("click",writePassword) ;
