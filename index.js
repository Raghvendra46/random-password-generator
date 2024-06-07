const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const firstPassword = document.getElementById("password-one")
const secondPassword = document.getElementById("password-two")
const generatePasswordsBtn = document.getElementById("generate-passwords")
generatePasswordsBtn.addEventListener("click",generatePassword)

function generatePassword() {
    let passwordLength = 15
    let passwordString1 = ""
    let passwordString2 = ""
    for (i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor( Math.random() * characters.length )
        passwordString1 += characters[randomIndex]
    }
    firstPassword.textContent = passwordString1
    for (i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor( Math.random() * characters.length )
        passwordString2 += characters[randomIndex]
    }   
    secondPassword.textContent = passwordString2
}
