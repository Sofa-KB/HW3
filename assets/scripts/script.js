var password;

var upper   = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower   = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var symbols = ["!@#$%^&*()_+?><"];

// Password Create Function
function createPW(pwLength, characters){ 

var pw = '';

// Do loop to check for correct numerical input
do {
    pwLength = parseInt(prompt("Enter a value between 8 and 128"));

if (isNaN(pwLength)) {
    alert("ERROR: Please enter a value between 8 and 128!");
    pwLength = 0;
    }

else if (pwLength < 8 || pwLength > 128) {
    alert("ERROR: Please enter a value between 8 and 128!")
    } 
}

while (pwLength < 8 || pwLength > 128);

// character declaration for usable password characters
var characters = '';


//Do loop to check for character types, requiring at least one character type
do {
    hasSymbols = confirm("Include symbols? OK for Yes, Cancel for No");
    hasNumbers = confirm("Include numbers? OK for Yes, Cancel for No");
    hasLower   = confirm("Include lower case? OK for Yes, Cancel for No");
    hasUpper   = confirm("Include upper case? OK for Yes, Cancel for No");
    
    var accept = hasSymbols || hasNumbers || hasLower || hasUpper;
    if (!accept) {
        alert("Error: Please select at least one character type!")
            }
        } while (!accept);
    
            if (hasSymbols) {
                characters += symbols;
            }
    
            if (hasNumbers) {
                characters += numbers;
            }
    
            if (hasLower) {
                characters += lower;
            }
    
            if (hasUpper) {
                characters += upper;
            }

// For loop to randomize character choice based on chosen length            
    for (var i = 0; i < pwLength; i++){
        pw += characters.charAt(Math.floor(Math.random() * characters.length));
    }

// Push final pw to page    
    document.getElementById("displayBox").innerText = pw; 
}  

// Clipboard function to copy password
function clipboard() {
    var copyText = document.getElementById("displayBox");
    navigator.clipboard.writeText(copyText.innerText);
}
