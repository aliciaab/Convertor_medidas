// Funções de conversão
function colherChaParaMl(valor) {
    return valor * 5; // 1 colher de chá = 5 ml
}

function colherSopaParaMl(valor) {
    return valor * 15; // 1 colher de sopa = 15 ml
}

function colherChaParaColherSopa(valor) {
    return valor / 3; // 3 colheres de chá = 1 colher de sopa
}

function colherSopaParaColherCha(valor) {
    return valor * 3; // 1 colher de sopa = 3 colheres de chá
}

function colherSopaParaXicara(valor) {
    return valor / 16; // 16 colheres de sopa = 1 xícara
}

function xicaraParaColherSopa(valor) {
    return valor * 16; // 1 xícara = 16 colheres de sopa
}

// Conversões de colheres para gramas (aproximado para açúcar)
function colherChaParaGrama(valor) {
    return valor * 4; // 1 colher de chá = 4 g
}

function colherSopaParaGrama(valor) {
    return valor * 12; // 1 colher de sopa = 12 g
}

function gramaParaColherCha(valor) {
    return valor / 4; // 1 g = 1/4 colher de chá
}

function gramaParaColherSopa(valor) {
    return valor / 12; // 1 g = 1/12 colher de sopa
}

// Função principal de conversão
function converter() {
    const valor = parseFloat(document.getElementById('inputValor').value);
    const unidadeEntrada = document.getElementById('unidadeEntrada').value;
    const unidadeSaida = document.getElementById('unidadeSaida').value;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = "<p>Por favor, insira um valor válido.</p>";
        return;
    }

    let resultado;

    // Lógica para determinar a conversão com base nas unidades selecionadas
    if (unidadeEntrada === "colherCha" && unidadeSaida === "ml") {
        resultado = colherChaParaMl(valor);
    } else if (unidadeEntrada === "colherSopa" && unidadeSaida === "ml") {
        resultado = colherSopaParaMl(valor);
    } else if (unidadeEntrada === "colherCha" && unidadeSaida === "colherSopa") {
        resultado = colherChaParaColherSopa(valor);
    } else if (unidadeEntrada === "colherSopa" && unidadeSaida === "colherCha") {
        resultado = colherSopaParaColherCha(valor);
    } else if (unidadeEntrada === "colherSopa" && unidadeSaida === "xicara") {
        resultado = colherSopaParaXicara(valor);
    } else if (unidadeEntrada === "xicara" && unidadeSaida === "colherSopa") {
        resultado = xicaraParaColherSopa(valor);
    } else if (unidadeEntrada === "ml" && unidadeSaida === "colherCha") {
        resultado = valor / 5; // ml para colher de chá
    } else if (unidadeEntrada === "ml" && unidadeSaida === "colherSopa") {
        resultado = valor / 15; // ml para colher de sopa
    } else if (unidadeEntrada === "colherCha" && unidadeSaida === "grama") {
        resultado = colherChaParaGrama(valor);
    } else if (unidadeEntrada === "colherSopa" && unidadeSaida === "grama") {
        resultado = colherSopaParaGrama(valor);
    } else if (unidadeEntrada === "grama" && unidadeSaida === "colherCha") {
        resultado = gramaParaColherCha(valor);
    } else if (unidadeEntrada === "grama" && unidadeSaida === "colherSopa") {
        resultado = gramaParaColherSopa(valor);
    } else if (unidadeEntrada === unidadeSaida) {
        resultado = valor; // Caso as unidades sejam as mesmas
    } else {
        resultado = "Conversão não suportada";
    }

    document.getElementById('resultado').innerHTML = `<p>${valor} ${unidadeEntrada} = ${resultado.toFixed(2)} ${unidadeSaida}</p>`;
}
