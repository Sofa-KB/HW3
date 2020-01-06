var password;

var upper   = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower   = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var symbols = ["!@#$%^&*()_+?><"];

function createPW(pwLength, characters){ 

var pw = '';

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

var characters = '';

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


    for (var i = 0; i < pwLength; i++){
        pw += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("displayBox").innerText = pw; 
    
}  

function clipboard() {
    var copyText = document.getElementById("displayBox");
    navigator.clipboard.writeText(copyText.innerText);
}
