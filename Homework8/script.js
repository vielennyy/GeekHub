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

function submitFormHandler(event) {
    event.preventDefault()
    let firstNameField = form.querySelector('.fname')
    let lastNameField = form.querySelector('.lname')
    let phoneNumberField = form.querySelector('.pnumber')
    let emailField = form.querySelector('.email')
    let passwordField = form.querySelector('.password')
    let cPasswordField = form.querySelector('.cpassword')

    let descriptions = document.querySelectorAll('.error')
    descriptions.forEach(element => element.style.display = 'none')

    let isCorrectInput = true

    let name, surname, phone, email, password;

    if(!isValidName(firstNameField.value.trim())){
        showInvalidInput(firstNameField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be uppercase'
        insertAfter(description, firstNameField)
        isCorrectInput = false
    }

    else {
        showValidInput(firstNameField)
        name = firstNameField.value.trim()
    }

    if(!isValidName(lastNameField.value.trim())) {
        showInvalidInput(lastNameField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be uppercase'
        insertAfter(description, lastNameField)
        isCorrectInput = false
    }

    else {
        showValidInput(lastNameField)
        surname = lastNameField.value.trim()
    }

    if(!isValidNumber(phoneNumberField.value.trim())){
        showInvalidInput(phoneNumberField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Invalid length or operator'
        insertAfter(description, phoneNumberField)
        isCorrectInput = false

    }

    else {
        showValidInput(phoneNumberField)
        phone = phoneNumberField.value.trim()
    }

    if(!isValidEmail(emailField.value.trim())) {
        showInvalidInput(emailField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Latin letters only. First symbol must be lowwercase letter'
        insertAfter(description, emailField)
        isCorrectInput = false

    }
    
    else {
        showValidInput(emailField)
        email = emailField.value.trim()
    }

    if(!isValidPassword(passwordField.value.trim())) {
        showInvalidInput(passwordField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Password consists at least of 8 characters. It should include at least one number, uppercase letter and special character'
        insertAfter(description, passwordField)
        isCorrectInput = false

    }

    else {
        showValidInput(passwordField)
    }

    if(!isValidPassword(passwordField.value.trim()) || passwordField.value.trim() != cPasswordField.value.trim()) {
        showInvalidInput(cPasswordField)
        let description = document.createElement('label')
        description.classList.add('error')
        description.innerHTML = 'Password isn\'t equal'
        insertAfter(description, cPasswordField)
        isCorrectInput = false
    }

    else {
        showValidInput(cPasswordField)
        password = cPasswordField.value.trim()
    }

    if (isCorrectInput) {
        let user = {name, surname, phone, password}
        console.log(user)
        showSuccess()
    }

}

form.addEventListener('submit', submitFormHandler)

