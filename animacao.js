//Projeto desenvolvido por Ygor
//GitHub: https://github.com/YgorCODE
//Ano: 2026



const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

document.addEventListener("DOMContentLoaded", function () {

  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');

  if (togglePassword && password) {
    togglePassword.addEventListener('click', () => {

      const type = password.type === 'password' ? 'text' : 'password';
      password.type = type;

      togglePassword.classList.toggle('bx-show');
      togglePassword.classList.toggle('bx-hide');

    });
  }

});

const forgotPassword = document.querySelector('#forgotPassword');

if (forgotPassword) {
  forgotPassword.addEventListener('click', function(e){
    e.preventDefault();
    alert("Funcionalidade de recuperação de senha em desenvolvimento.");
  });
}
