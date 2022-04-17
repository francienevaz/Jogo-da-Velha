const jogador = {
    valor: null
}

const vencedor = {
    valor: null
}

const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

const quadrados = document.getElementsByClassName('square');


function escolherQuadrado (id) {
    let quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador.valor;
    quadrado.style.color = '#000';

    if(jogador.valor === "X") {
        jogador.valor = '0';
    } else {
        jogador.valor = 'X';
    }

    mudarJogador(jogador.valor);
    verificarVencedor();
};

function mudarJogador(valor) {
    jogador.valor = valor;
    jogadorSelecionado.innerHTML = jogador.valor;
}

function verificarVencedor () {
    var Q1 = document.getElementById('1');
    var Q2 = document.getElementById('2');
    var Q3 = document.getElementById('3');
    var Q4 = document.getElementById('4');
    var Q5 = document.getElementById('5');
    var Q6 = document.getElementById('6');
    var Q7 = document.getElementById('7');
    var Q8 = document.getElementById('8');
    var Q9 = document.getElementById('9');

    if (verificarSequencia(Q1, Q2, Q3)) {
        mudarCorQuadrado(Q1, Q2, Q3);
        mudarVencedor(Q1);
        return;
    }

    if (verificarSequencia(Q4, Q5, Q6)) {
        mudarCorQuadrado(Q4, Q5, Q6);
        mudarVencedor(Q4);
        return;
    }

    if (verificarSequencia(Q7, Q8, Q9)) {
        mudarCorQuadrado(Q7, Q8, Q9);
        mudarVencedor(Q7);
        return;
    }
    if (verificarSequencia(Q1, Q5, Q9)) {
        mudarCorQuadrado(Q1, Q5, Q9);
        mudarVencedor(Q5);
        return;
    }
}

function mudarVencedor (quadrado) {
    vencedor.valor = quadrado;
    vencedorSelecionado.innerHTML = vencedor.valor;
}

function mudarCorQuadrado (Q1, Q2, Q3) {
    Q1.style.color = '#0f0';
    Q2.style.color = '#0f0';
    Q3.style.color = '#0f0';
}

function verificarSequencia (Q1, Q2, Q3) {
    var eIgual = false;

    if (Q1.innerHTML !== '-' && Q1.innerHTML === Q2.innerHTML && Q2.innerHTML === Q3.innerHTML) {
        eIgual = true;
    }
}