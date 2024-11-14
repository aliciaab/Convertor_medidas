function converterComprimento() {
    const valor = parseFloat(document.getElementById('inputValor').value);
    const unidadeEntrada = document.getElementById('unidadeEntrada').value;
    const unidadeSaida = document.getElementById('unidadeSaida').value;
    let resultado;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    // A conversão de comprimento pode ser complexa dependendo das unidades,
    // então vamos adicionar as fórmulas aqui com as unidades específicas.
    const unidades = {
        metros: 1,
        centimetros: 100,
        quilometros: 0.001,
        milimetros: 1000,
        polegadas: 39.3701,
        pes: 3.28084
    };

    if (unidadeEntrada === unidadeSaida) {
        resultado = valor;
    } else {
        resultado = valor * (unidades[unidadeSaida] / unidades[unidadeEntrada]);
    }

    document.getElementById('resultado').innerHTML = `${valor} ${unidadeEntrada} é igual a ${resultado.toFixed(2)} ${unidadeSaida}`;
}
