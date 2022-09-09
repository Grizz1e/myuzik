const name = document.querySelector('#fullname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const errMsg = document.querySelector('#error-msg')
const copyrightDate = document.querySelector('#year')
const thisYear = new Date().getFullYear()
copyrightDate.textContent = thisYear



function validate() {
    if (email.value === password.value) {
        alert("Username and password cannot be same")
        return false
    } else {
        return true
    }
}