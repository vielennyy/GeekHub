let form = document.querySelector('form')
let firstName = form.querySelector('.fname').value.trim()
let lastName = form.querySelector('.lname').value.trim()
let phoneNumber = form.querySelector('.pnumber').value.trim()
let email = form.querySelector('.email').value.trim()
let password = form.querySelector('.password').value.trim()
let cPassword = form.querySelector('.cpassword').value.trim()
let submit = form.querySelector('.submit')

// 1
function isOnlyLatinCharacters(str) {
    return /^[a-z]$/i.test(str);
}

function isFirstLetterUppercase(str) {
    return /^[A-Z]/.test(str);
}

function hasMoreThanTwoCharacters(str) {
    return /{2,}}/.test(str);
}
console.log(firstName)
function submitFormHandler() {

}
// form.addEventListener('submit', )

