let numerosSorteados = [];
let tentativas;
let numeroSecreto;
let limite = 10;


iniciarlizarJogo();

function iniciarlizarJogo(){
    limparCampo();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    alteraTexto('h1','Jogo do número secreto');
    alteraTexto('p','Escolha um número de 1 a 10!');
}

function alteraTexto(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.25});

}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(numeroSecreto == chute){
        let plural = tentativas>1 ? 'tentativas': 'tentativa';
        alteraTexto('h1', 'Acertou!!!');
        alteraTexto('p', `Você descobriu o número secreto com ${tentativas} ${plural}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(numerosSorteados);
    }else{
        tentativas++;
        if(chute<numeroSecreto)
        {
            alteraTexto('p', 'Numero secreto é maior!')
        }else{
            alteraTexto('p', 'Numero secreto é menor!')
        }
        limparCampo();
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*limite+1);
    let qtdDeElementosLista = numerosSorteados.length;

    if(qtdDeElementosLista == limite){
        numerosSorteados = [];
    }
    if(numerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    iniciarlizarJogo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}