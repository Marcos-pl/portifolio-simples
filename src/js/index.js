/*
objetivo 1 - quando o usuario ckicar no botão de mostrar mais deve abrir os projetos que estão escodindos no html
     
    passo 1 - pegar o botão mostrar mais no JS para   poder verificar quando o usuario clicar em cima dele

    passo 2 - indentificar o click no botão

    paso 3 - adicionar a classe ativo nos projetos escondidos



 objetivo 2 - esconde o botão de mostrar mais
   
     passo 1 - pega o botão e esconder ele
*/

//objetivo 1 - quando o usuario ckicar no botão de mostrar mais deve abrir os projetos que estão escodindos no html

//passo 1 - pegar o botão mostrar mais no JS para   poder verificar quando o usuario clicar em cima dele

const botaoMostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarprojetos.addEventListener('click', () => {
    //paso 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisProjetos();
    //objetivo 2 - esconde o botão de mostrar mai
    //passo 1 - pega o botão e esconder ele
    esconderBotao();

})

function esconderBotao() {
    botaoMostrarprojetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
