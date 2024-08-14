// Coletar os dados dos elementos de slider, botao, tamanho da senhe e senha gerada
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")


// algoritmo de senha
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#'
let novaSenha = ''

// mostrar valor do slider
sizePassword.innerHTML = sliderElement.value;

// valor do slider altera conforme muda a posição
slider.oninput =  function(){
    sizePassword.innerHTML = this.value;
}


//gerar a senha
function generatePassword(){
    // preenche a senha com a quantidade de letras do slider
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    // remove a classe hide, insere a senha no password e insere na variavel novaSenha
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

// copia a senha para a area de cópia
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
