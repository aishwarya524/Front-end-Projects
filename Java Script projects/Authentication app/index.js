let passwordStored = ""

let signupInput = document.getElementById('sign-up')
let signupValid = document.getElementById('sign-up-valid')
let signupInvalid = document.getElementById('sign-up-invalid')
let passwordStrength = document.getElementById('password-strength')
let loginInput = document.getElementById('log-in')
let loginValid = document.getElementById('log-in-valid')
let loginInvalid = document.getElementById('log-in-invalid')

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g', 'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm', 
    '0': '5', '1': '6', '2': '7', '3': '8', '4': '9', '5': '0', '6': '1', '7': '2', '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@', '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_' 
}

const encode = (str) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = str.split("")
    let encodeArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index]
    })
    return encodeArr.join("")
}

const decode = (encodedstr) => {
    const codeArr = encodedstr.split("")
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodedArr.join("")
}

const checkPwdStrength = () => {
    let inputPwd = signupInput.value
    if(inputPwd.length < 5){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Weak"
        passwordStrength.style.color = 'red'
    }
    else if(inputPwd.length < 8){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Moderate"
        passwordStrength.style.color = 'orange'
    }
    else{
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Strong"
        passwordStrength.style.color = 'green'
    }
}

const signUp = () => {
    let inputPwd = signupInput.value
    if(inputPwd.length < 8){
        signupValid.style.display = 'none'
        signupInvalid.style.display = 'block'
    }
    else{
        passwordStored = encode(inputPwd)
        signupValid.style.display = 'block'
        signupInvalid.style.display = 'none'        
    }
}

const login = () => {
    let inputPwd = loginInput.value
    if(inputPwd === decode(passwordStored) && inputPwd != ""){
        loginValid.style.display = 'block'
        loginInvalid.style.display = 'none'
    }
    else{
        loginValid.style.display = 'none'
        loginInvalid.style.display = 'block'
    }
}
