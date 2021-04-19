const form = document.querySelector('.main-sec');
const uName = document.querySelector('.u-name');
const uEmail = document.querySelector('.u-email');
const password1 = document.querySelector('.pass1');
const password2 = document.querySelector('.pass2');
const submitBtn = document.querySelector('.submit-btn');
const nameMsg = document.querySelector('.name-msg');
const emailMsg = document.querySelector('.email-msg');
const pass1Msg = document.querySelector('.pass1-msg');
const pass2Msg = document.querySelector('.pass2-msg');

form.addEventListener('submit' , validation);

function validation(e){
  // var userEmail = uEmail.value;
  // var pass1 = password1.value;
  // var pass2 = password2.value;
  // var name = uName.value;

  if(uName.value === ''){
    nameMsg.textContent = '*username is required';
    nameMsg.style.color = 'red';
    uName.style.borderColor = 'red';
  }else{
    uName.style.borderColor = 'green';
    nameMsg.textContent = '';
  }

  if(uEmail.value === ''){
    emailMsg.textContent = '*email is required';
    uEmail.style.borderColor = 'red';
    emailMsg.style.color = 'red';
  }else{
    uEmail.style.borderColor = 'green';
    emailMsg.textContent = '';
  }

  if(password1.value === ''){
    pass1Msg.textContent = '*password is required';
    password1.style.borderColor = 'red';
    pass1Msg.style.color = 'red';
  }else{
    password1.style.borderColor = 'green';
    pass1Msg.textContent = '';
  }

  if(password2.value === ''){
    pass2Msg.textContent = '*re-enter password';
    password2.style.borderColor = 'red';
    pass2Msg.style.color = 'red';
  }else{
    password2.style.borderColor = 'green';
    pass2Msg.textContent = '';
  }


  e.preventDefault();
}

// function showError(color , msg){
//   setMsg.textContent = msg;
//   inpField.style.borderColor = color;
//   setMsg.style.color = color;
// }

// function showSuccess(color){
//   inpField.style.borderColor = color;
//   setMsg.textContent = '';
// }