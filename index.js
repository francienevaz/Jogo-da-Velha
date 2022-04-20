const jogador = {
    valor: null
}

const vencedor = {
    valor: null
}

const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado (id) {
    if (vencedor.valor !== null) {
        return;
    }

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
    let Q1 = document.getElementById("1");
    let Q2 = document.getElementById("2");
    let Q3 = document.getElementById("3");
    let Q4 = document.getElementById("4");
    let Q5 = document.getElementById("5");
    let Q6 = document.getElementById("6");
    let Q7 = document.getElementById("7");
    let Q8 = document.getElementById("8");
    let Q9 = document.getElementById("9");

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

    if (verificarSequencia(Q2, Q5, Q8)) {
        mudarCorQuadrado(Q2, Q5, Q8);
        mudarVencedor(Q2);
        return;
    }

    if (verificarSequencia(Q3, Q5, Q7)) {
        mudarCorQuadrado(Q3, Q5, Q7);
        mudarVencedor(Q3);
        return;
    }

    if (verificarSequencia(Q1, Q4, Q7)) {
        mudarCorQuadrado(Q1, Q4, Q7);
        mudarVencedor(Q1);
        return;
    }

    if (verificarSequencia(Q3, Q6, Q9)) {
        mudarCorQuadrado(Q3, Q6, Q9);
        mudarVencedor(Q3);
        return;
    }

    if (verificarSequencia(Q1, Q5, Q9)) {
        mudarCorQuadrado(Q1, Q5, Q9);
        mudarVencedor(Q1);
    }
}

function mudarVencedor (quadrado) {
    vencedor.valor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor.valor;
}

function mudarCorQuadrado (Q1, Q2, Q3) {

    Q1.style.background = '#00fd94';
    Q2.style.background = '#00fd94';
    Q3.style.background = '#00fd94';
}

function verificarSequencia (Q1, Q2, Q3) {
    let eIgual = false;

    if (Q1.innerHTML !== '-' && Q1.innerHTML === Q2.innerHTML && Q2.innerHTML === Q3.innerHTML) {
        eIgual = true;
    }

    return eIgual;
}

function reiniciar() {
    vencedor.valor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i);
        quadrado.style.background = '#4d8991';
        quadrado.style.color = '#4d8991';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}