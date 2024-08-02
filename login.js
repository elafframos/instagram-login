let email = document.getElementById('email') //Chamando o e-mail que o usuário digitar
let senha = document.getElementById('senha') //Chamando a senha que o usuário digitar

function pagina1() { //Função
    if(email.value.length == 0) { //Se não tiver nada escrito no campo do e-mail é para entrar no if
        alert('[ERRO] Digite um e-mail!') //Se não tiver escrito no campo de e-mail é para aparecer essa mensagem
        email.focus() //Para o foco ficar no campo do e-mail
    } else if (senha.value.length == 0) { //Se não tiver nada escrito no campo do senha é para entrar no if
        alert('[ERRO] Digite uma senha!') //Se não tiver escrito no campo de senha é para aparecer essa mensagem
        senha.focus() //Para o foco ficar no campo do senha
    } else { //Se estiver tudo certo ele entrará nesse else
        window.location = "inicio.html" //Para chamar uma pagina de html
    }
}
