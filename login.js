let email = document.getElementById('email')
let senha = document.getElementById('senha')
let res = document.getElementById('res')

function pagina1() {
    if(email.value.length == 0) {
        alert('[ERRO] Digite um e-mail!')
        email.focus()
    } else if (senha.value.length == 0) {
        alert('[ERRO] Digite uma senha!')
        senha.focus()
    } else {
        window.location = "inicio.html" //Para chamar uma pagina de html
    }
}
