const form = document.querySelector('.main-sec');
const uName = document.querySelector('.u-name');
const uEmail = document.querySelector('.u-email');
const password1 = document.querySelector('.pass1');
const password2 = document.querySelector('.pass2');
const submitBtn = document.querySelector('.submit-btn');
const successMsg = document.querySelector('.successful');
let counter = 0 ;

function increaseCounter(){
  counter += 1;
}

function checkSuccess(num , text){
  if(counter == num){
    form.querySelector("h2").style.display = 'none';
    form.querySelector("form").style.display = 'none';
    successMsg.style.display = 'flex';
    const msg = successMsg.querySelector("p");
    msg.textContent = text ; 
  }
}

function showError(input , msg , color){
  const container = document.querySelector(`.${input}`);
  const userInput = container.querySelector("input");
  const dispMsg = container.querySelector("p");
 
  userInput.style.borderColor = color ; 
  dispMsg.textContent = msg;  

  counter = 0;
}

function showSuccess(input , color){
  const container = document.querySelector(`.${input}`);
  const userInput = container.querySelector("input");
  const dispMsg = container.querySelector("p");

  userInput.style.borderColor = color ; 
  dispMsg.textContent = '';
}

function checkLength(input , min , max){
  const container = document.querySelector(`.${input}`);
  const userInput = container.querySelector("input");

    if(userInput.value.length < min){
      showError(input , `*${input} must be more than ${min} characters.` , 'red');
    }else if(userInput.value.length > max){
      showError(input , `*${input} must be less than ${max} characters.` , 'red');
    }else{
      showSuccess(input , 'green');
    }
}

function checkPasswords(pass1, pass2){
  const container = document.querySelector(`.${pass2}`);
  const pasword2 = container.querySelector("input");

  if(pass1.value !== password2.value){
    showError(pass2, 'passsowrd donot match' , 'red');
  }
}

form.addEventListener('submit' , function(e){
  e.preventDefault();

  if(uName.value === ''){
    showError('username' , '*username is required' , 'red');
  }else{
    showSuccess('username' , 'green');
    increaseCounter();
  }

  if(uEmail.value === ''){
    showError('email' , '*email is required' , 'red');
  }
  // else if(!validateEmail(uEmail.value)){
  //   showError('email' , '*email is not valid' , 'red');
  // }
  else{
    showSuccess('email' , 'green');
    increaseCounter();
  }

  if(password1.value === ''){
    showError('password' , '*password is required' , 'red');
  }else{
    showSuccess('password' , 'green');
    increaseCounter();
  }

  if(password2.value === ''){
    showError('password1' , '*re-enter password' , 'red');
  }else{
    showSuccess('password1' , 'green');
    increaseCounter();
  }

  checkLength('username', 4, 10);
  checkLength('password', 7, 10);
  checkPasswords(password1 , 'password1');
  checkSuccess(4 , 'login successfull');

});


// function validateEmail(inpEmail){

//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     return re.test(String(inpEmail).toLowerCase());
// }
















