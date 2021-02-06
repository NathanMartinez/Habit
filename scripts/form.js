export default class Form {
  constructor() {
    this.inputs = document.querySelectorAll('input');
    this.submitButton = document.querySelector('button');
    this.valid = false;
    this.type = this.inputs.length > 2 ? 'signup' : 'login'
    this.data = {}
  }
  getValues() {
    let data = {}
    this.inputs.forEach(input => {
        data = {...data, ...{[input.name]: input.value}, ...{type: this.type}}
    }) 
    return data
  }
  validateForm() {
    // Validate that the passwords match
    if (this.data.type === 'signup' && this.data.password !== this.data.passwordConfirmation) {
        alert('Passwords do not match')
    } else if (this.data.type === 'signup') {
        this.valid = true
        alert('Account Created!')
    } else if (this.data.type === 'login') {
        this.valid = true
        alert('Logged In')
    } 
  }
  handleValues(array) {
      this.data = this.getValues()
      this.validateForm()
      if (this.data.type && this.valid) {
        array.push(this.data)
      }
  }
}