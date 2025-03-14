document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);
    let resultadoTexto = `Seu IMC é ${imc.toFixed(2)}.`;

    // Definindo a classificação
    if (imc < 18.5) {
    resultadoTexto += " Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
    resultadoTexto += " Você está com o peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
    resultadoTexto += " Você está com sobrepeso.";
    } else if (imc >= 30) {
    resultadoTexto += " Você está com obesidade.";
    }

    // Exibindo o resultado
    document.getElementById('resultado').textContent = resultadoTexto;
});
