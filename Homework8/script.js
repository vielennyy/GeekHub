let form = document.querySelector('form')

let user = {}

function isValidName(str) {
    return /^[A-Z]+[a-z]{2,}/.test(str)
}

// 2

// Ukrainian operators
// Kyivstar: 067 068 096 097 098
// Lifecell: 063 073 093
// Vodafone: 050 066 095 099

function isValidOperator(str) {
    let number = str.slice(2)
    return /^067|^068|^096|^097|^098|^063|^073|^093|^050|^066|^095|^099/.test(number)    
}

function validateTheNumber(str){
    let number = str.replace(/\D/g, '')
    if (/^38/.test(number)) {
        return number
    }
    else {
        return '38'+ number
    }
}

function isValidLength(str) {
    return /^\d{12}/.test(str)
}

function isValidNumber(str) {
    let number = validateTheNumber(str)
    if(isValidOperator(number)) {
        return isValidLength(number)
    }
    return false
}

// 3

// function isValidEmail(str) {
//     return /^[a-z]+\w+@[\w-]+.[\w-]{2,4}$/g.test(str)
// }
function isValidEmail(str) {
    return /^[a-z]+\w+@[a-z]+.[a-z]{2,4}$/g.test(str)
}

// 4

function isValidPassword(str) {
    return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(str)
}

// other functions

function showInvalidInput(input) {
    input.style.border = '2px solid red'
}
function showValidInput(input) {
    input.style.border = '2px solid green'
}

function insertAfter(node, prevNode) {
    prevNode.parentNode.insertBefore(node, prevNode.nextSibling);
}

function showSuccess(){
    let formBlock = document.querySelector('.form-wrapper')
    formBlock.style.display = 'none'
    let validInput = document.querySelector('.valid-input')
    validInput.style.display = 'block'
}

function submitFormHandler() {
    event.preventDefault()
    let firstName = form.querySelector('.fname')
    let lastName = form.querySelector('.lname')
    let phoneNumber = form.querySelector('.pnumber')
    let email = form.querySelector('.email')
    let password = form.querySelector('.password')
    let cPassword = form.querySelector('.cpassword')

    let descriptions = document.querySelectorAll('.error')
    descriptions.forEach(element => element.style.display = 'none')

    let isCorrectInput = true



    if(!isValidName(firstName.value.trim())){
        showInvalidInput(firstName)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be uppercase'
        insertAfter(description, firstName)
        isCorrectInput = false
    }

    else {
        showValidInput(firstName)
        user.firstName = firstName.value.trim()
    }

    if(!isValidName(lastName.value.trim())) {
        showInvalidInput(lastName)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be uppercase'
        insertAfter(description, lastName)
        isCorrectInput = false
    }

    else {
        showValidInput(lastName)
        user.lastName = lastName.value.trim()
    }

    if(!isValidNumber(phoneNumber.value.trim())){
        showInvalidInput(phoneNumber)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Invalid length or operator'
        insertAfter(description, phoneNumber)
        isCorrectInput = false

    }

    else {
        showValidInput(phoneNumber)
        user.phoneNumber = phoneNumber.value.trim()
    }

    if(!isValidEmail(email.value.trim())) {
        showInvalidInput(email)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be lowwercase letter'
        insertAfter(description, email)
        isCorrectInput = false

    }
    
    else {
        showValidInput(email)
        user.email = email.value.trim()
    }

    if(!isValidPassword(password.value.trim())) {
        showInvalidInput(password)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Password consists at least of 8 characters. It should include at least one number, uppercase letter and special character'
        insertAfter(description, password)
        isCorrectInput = false

    }

    else {
        showValidInput(password)
    }

    if(!isValidPassword(password.value.trim()) || password.value.trim() != cPassword.value.trim()) {
        showInvalidInput(cPassword)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Password isn\'t equal'
        insertAfter(description, cPassword)
        isCorrectInput = false
    }

    else {
        showValidInput(cPassword)
        user.password = cPassword.value.trim()
    }

    if (isCorrectInput) {
        console.log(user)
        showSuccess()
    }

}

form.addEventListener('submit', submitFormHandler)

