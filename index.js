// Storing reference to DOM elements in variables
const lettersCheckbox = document.getElementById("no-letters")
const numbersCheckbox = document.getElementById("no-numbers")
const symbolsCheckbox = document.getElementById("no-symbols")
const firstPassword = document.getElementById("password-one")
const secondPassword = document.getElementById("password-two")
const generatePasswordsBtn = document.getElementById("generate-passwords")



// Declaring arrays with Characters
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]



// Calling the generatePassword Function on "Generate Passwords" Button Click
generatePasswordsBtn.addEventListener("click", generatePassword)



// To Copy firstPassword to Clipboard
firstPassword.addEventListener("click", function () {
    const clipText1  = firstPassword.textContent;
    navigator.clipboard.writeText(clipText1);
})


// To Copy secondPassword to Clipboard
secondPassword.addEventListener("click", function () {
    const clipText2  = secondPassword.textContent;
    navigator.clipboard.writeText(clipText2);
})



// Declaring the array to hold the necessary array elements
const characters = []



// Declaring the function to generate random password
function generatePassword() {
    const passwordLength = 15 //password length
    let passwordString1 = "" //first variable to store randomly generated password string
    let passwordString2 = "" //second variable to store randomly generated password string

    characters.length = 0 //clearing the characters array

    // Declaring the Conditional Statements


    // if all checkboxes are checked

    if (lettersCheckbox.checked && numbersCheckbox.checked && symbolsCheckbox.checked) {
        alert("You've selected all options. Please deselect at least one option to generate a password.")
        return;
    }

    // if No Letters & No Numbers  are Checked

    else if (lettersCheckbox.checked && numbersCheckbox.checked) {
        characters.push(...symbols)
    }

    // if No Numbers & No Symbols are Checked

    else if (numbersCheckbox.checked && symbolsCheckbox.checked) {
        characters.push(...letters)
    }

    // if No Letters & No Symbols are checked

    else if (lettersCheckbox.checked && symbolsCheckbox.checked) {
        characters.push(...numbers)
    }

    // if No Letters is Checked

    else if (lettersCheckbox.checked) {
        characters.push(...numbers,...symbols)
    }

    // if No Numbers is Checked

    else if (numbersCheckbox.checked) {
        characters.push(...letters,...symbols)
    }

    // if No Symbols is Checked

    else if (symbolsCheckbox.checked) {
        characters.push(...letters,...numbers)
    }

    // if None of the Checkboxes is Checked
    
    else {
        characters.push(...letters,...numbers,...symbols)
    }


    // Loop to generate Random Password Option#1
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        passwordString1 += characters[randomIndex]
    firstPassword.textContent = passwordString1
    }


    // Loop to generate Random Password Option#2
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        passwordString2 += characters[randomIndex]
    }   
    secondPassword.textContent = passwordString2

    
    console.log(characters) // Additional Console.log just to show the valid Characters inside the Console
}   
