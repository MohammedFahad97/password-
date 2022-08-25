const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 10

let passwordEl1=document.getElementById("password-el-1")
let passwordEl2=document.getElementById("password-el-2")
const generateBtn = document.getElementById("btn")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

 function  generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    // return randomPassword

    
}

passwordEl1.textContent=generatePassword()
// console.log(generatePassword)
function generatePasswordTwo(){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++){
    randomPassword += getRandomCharacter()
    }
    // return randomPassword
    passwordEl2.textContent=generatePasswordTwo()
}

// const generatedPasswordTwo = generatePasswordTwo()

passwordEl2.textContent=generatePassword()
console.log(generatePasswordTwo)
