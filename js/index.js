let email = document.querySelector('#email');
let senha = document.querySelector('#senha');

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  let user = {
    email: "",
    senha: ""
  } 

  let userLogin = JSON.parse(localStorage.getItem("usuarios"))

  userLogin.forEach(element => {
    
    if (email.value === element.emailCad && senha.value === element.senhaCad) {
      user = {
        email: element.emailCad,
        senha: element.senhaCad
      }

      location.href = 'dash.html'
    }

  });
})