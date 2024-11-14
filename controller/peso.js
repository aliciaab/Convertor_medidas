function converterPeso() {
    const valor = parseFloat(document.getElementById('inputValor').value);
    const unidadeEntrada = document.getElementById('unidadeEntrada').value;
    const unidadeSaida = document.getElementById('unidadeSaida').value;
    let resultado;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    // A conversão de peso é similar ao comprimento, com taxas de conversão específicas.
    const unidades = {
        grama: 1,
        quilograma: 0.001,
        tonelada: 1e-6,
        libra: 0.00220462,
        onca: 0.03527396
    };

    if (unidadeEntrada === unidadeSaida) {
        resultado = valor;
    } else {
        resultado = valor * (unidades[unidadeSaida] / unidades[unidadeEntrada]);
    }

    document.getElementById('resultado').innerHTML = `${valor} ${unidadeEntrada} é igual a ${resultado.toFixed(2)} ${unidadeSaida}`;
}
