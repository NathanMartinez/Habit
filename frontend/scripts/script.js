import Form from './form.js'

let form = new Form()

let accounts = []

form.onChangeHandling()
form.addFocusEvents()

form.submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    form.handleValues(accounts)
})