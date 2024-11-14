function converterTemperatura() {
    const valor = parseFloat(document.getElementById('inputValor').value);
    const unidadeEntrada = document.getElementById('unidadeEntrada').value;
    const unidadeSaida = document.getElementById('unidadeSaida').value;
    let resultado;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (unidadeEntrada === unidadeSaida) {
        resultado = valor;
    } else {
        switch (unidadeEntrada) {
            case "celsius":
                if (unidadeSaida === "fahrenheit") {
                    resultado = (valor * 9/5) + 32;
                } else if (unidadeSaida === "kelvin") {
                    resultado = valor + 273.15;
                }
                break;
            case "fahrenheit":
                if (unidadeSaida === "celsius") {
                    resultado = (valor - 32) * 5/9;
                } else if (unidadeSaida === "kelvin") {
                    resultado = (valor - 32) * 5/9 + 273.15;
                }
                break;
            case "kelvin":
                if (unidadeSaida === "celsius") {
                    resultado = valor - 273.15;
                } else if (unidadeSaida === "fahrenheit") {
                    resultado = (valor - 273.15) * 9/5 + 32;
                }
                break;
        }
    }

    document.getElementById('resultado').innerHTML = `${valor} ${unidadeEntrada} é igual a ${resultado.toFixed(2)} ${unidadeSaida}`;
}
