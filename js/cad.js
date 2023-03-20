//VETOR É UMA VARIAVEL COMPOSTA

let usuarios = []
//CAPTURAR OS DADOS DIGITAIS
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let senhaC = document.querySelector('#confirmaSenha')
//CRIAR UM EVENTO DA DOM
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  if (email.value == '' || senha.value == '' || senhaC.value == '') {
    alert('Campo vaizo')
  } else if (senha.value !== senhaC.value) {
    alert('senha difrentes')
  } else {
    let objUser = {
      emailCad: email.value,
      senhaCad: senha.value
    }
    usuarios = dadosLocal();
    usuarios.push(objUser);
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('Conta criada')
    window.location.href = 'index.html'
  }
})

const dadosLocal = () => {
  let dados = JSON.parse (localStorage.getItem("usuarios") || '[]');
  return dados;
}

console.log("js");

