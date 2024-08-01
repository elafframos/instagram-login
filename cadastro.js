let email = document.getElementById('email')
let nome = document.getElementById('nome')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')
let res = document.getElementById('res')

function cadastro() {
    if(email.value.length == 0) {
        alert('[ERRO] Digite um e-mail!')
        email.focus()
    } else if (nome.value.length == 0) {
        alert('[ERRO] Digite um nome!')
        nome.focus()
    } else if (usuario.value.length == 0) {
        alert('[ERRO] Digite um usuário!')
        usuario.focus()
    } else if (senha.value.length == 0) {
        alert('[ERRO] Digite uma senha!')
        senha.focus()
    } else {
        window.location = "inicio.html" //Para chamar uma pagina de html
    }
}
