let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exbirMensagemInicial(){
    exibirTextoNaTela('h1', "Jogo do Número Secreto");
    exibirTextoNaTela('p', "Escolha um número entre 1 e 50");

}

exbirMensagemInicial()


function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', "Você acertou");

        let palavraTentativa = (numeroTentativas == 1)? "tentativa": "tentativas";
        let mensagem = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');
        // reiniciarJogo();

    }else{
        // exibirTextoNaTela('h1', `Você errou :(`);
        
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', "O número secreto é menor");
            
        }else{
            exibirTextoNaTela('p', "O número secreto é maior");

        }

        numeroTentativas++;
        limparCampo();
    }

    
}
reiniciarJogo();

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let valorMaximo = 50;
    let numeroEscolhido = parseInt(Math.random()*valorMaximo) + 1;
    let quantidadeNumerosEscolhidos = listaNumerosSorteados.length;
    if (quantidadeNumerosEscolhidos  == valorMaximo){
        listaNumerosSorteados = [];
    }

    // while (numeroEscolhido in listaNumerosSorteados){
    /*while(listaNumerosSorteados.includes(numeroEscolhido)){
        numeroEscolhido = parseInt(Math.random()*10) + 1;
    }*/

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }

    listaNumerosSorteados.push(numeroEscolhido);
    console.log(listaNumerosSorteados)
    return numeroEscolhido;
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exbirMensagemInicial();
}