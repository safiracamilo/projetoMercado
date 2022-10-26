// Importação / Referência a Bibliotecas


// Clase (Opcional)

// Funções ou Metódos

let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

const multiplicarDoisNumeros = (num1, num2) => {
    return num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros,
}
