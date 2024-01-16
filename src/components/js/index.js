const container = document.querySelector('.container__base--content-email')
const inputField = container.querySelector('.email__box--input')
const imageError = container.querySelector('.email__box--error-icon')
const errorMsg = container.querySelector('.container__base--content-email_error')
const inputBorder = container.querySelector('.email__box')
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


const timer = () => {
  setTimeout(() => {
    imageError.classList.add('hidden')
    errorMsg.classList.add('hidden')
    inputBorder.style.border = '1px solid hsla(0, 36%, 70%, 0.448)'
  }, 3000)
}


container.addEventListener('submit', function(e) {
  e.preventDefault()
  if(inputField.value === '' || !validEmail.test(inputField.value)) {
    imageError.classList.remove('hidden')
    errorMsg.classList.remove('hidden')
    inputBorder.style.border = '2px solid hsl(0, 93%, 68%)'
    timer()
  } 
  else {
    inputField.value = ''
  }
})