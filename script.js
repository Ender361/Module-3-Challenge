// Assignment code here
// Referencing the generate id in html 
var generateBtn = document.querySelector("#generate");

// Defining function that create criteria password prompts on screen
function passwordCriteria() {
  var passwordLengthCriteria = prompt("What is the length criteria of your password? (ex. '5 20' for length between 5 and 20 characters.");

  // Split the prompt answer into two different integer variables
  var passwordLengthCriteriaArray = passwordLengthCriteria.split(" ");
  var passwordLengthMin = parseInt(passwordLengthCriteriaArray[0]);
  var passwordLengthMax = parseInt(passwordLengthCriteriaArray[1]);


  // While loop to test if proper input is recieved
  while (!(passwordLengthMin < passwordLengthMax) || (passwordLengthMin < 0)) {
    alert("Invalid Criteria! Make sure to input a non-negative minimum and maximum integer seperated by a space.");
    var passwordLengthCriteria = prompt("What is the length criteria of your password? (ex. '5 20' for length between 5 and 20 characters.");
    var passwordLengthCriteriaArray = passwordLengthCriteria.split(" ");
    var passwordLengthMin = parseInt(passwordLengthCriteriaArray[0]);
    var passwordLengthMax = parseInt(passwordLengthCriteriaArray[1]);
  }

  if (passwordLengthMin < passwordLengthMax) {
    var specialCharsOn = confirm("Would you like to include lowercase, uppercase, numeric, and/or special characters?");
  }

  // Creating an array to hold my 3 variables I need and then return the array
  var criteriaArray = [passwordLengthMin, passwordLengthMax, specialCharsOn];
  return criteriaArray;

}

// Creating function to generate password
function generatePassword() {
  
// Run the criteria function to give us variables we
var criteriaArray = (passwordCriteria());

// Split the array to define the 3 distinct variables we need
var passwordLengthMin = criteriaArray[0];
var passwordLengthMax = criteriaArray[1];
var specialCharsOn = criteriaArray[2];

// Defining function to determine length of password based on parameters
function randomLength(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Creating variable to feed into generate password function
var passLength = (randomLength(passwordLengthMin, passwordLengthMax+1));

// Creating the random password
var pass = " ";
var str = "abcdefghijklmnopqrstuvwxyz";
if (specialCharsOn === true) {
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
  'abcdefghijklmnopqrstuvwxyz0123456789@#$' + '\0 \` \" \\ \u00E9'
}

for (let c = 1; c <= passLength; c++) {
  var char = Math.floor(Math.random()
    * str.length + 1);

  pass += str.charAt(char);
}

return pass;


}

// Write password to the #password input (writes password to the screen)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (make it so hitting the button we defined earlier will run writepassword function)
generateBtn.addEventListener("click", writePassword);
