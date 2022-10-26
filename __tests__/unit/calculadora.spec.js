// Bibliotecas
//Apontamento para o arquivo de desenvolvimento que vamos testar


const calculadora = require("../../src/calculadora")

// Apontamento para o arquivo de massa de teste
const arquivoJson = require("../../vendors/csv/massaDivisao");


//Funções de teste unidade

test("somar 5 + 7", () => {
    //1-Configura
    //1.1 Dados de Entrada
    const num1 =5;
    const num2 =7;

    //1.2 Resultado Esperado
    resultadoEsperado = 12;

    //2.Executa
    //Criando um objeto para receber a função
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    //executando a funçao somar dois numero e guardando o resultado
    const resultadoAtual = somarDoisNumeros(num1, num2);
    

    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("subtrair 15-7",() =>{
    const num1 =15;
    const num2 =7;

    //1.2 Resultado Esperado
    resultadoEsperado = 8;

    //2.Executa
    //Criando um objeto para receber a função
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    //executando a funçao somar subtrair numero e guardando o resultado
    const resultadoAtual = subtrairDoisNumeros(num1, num2);
    

    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("multiplicar 5*2",() =>{
    const num1 =5;
    const num2 =2;

    //1.2 Resultado Esperado
    resultadoEsperado = 10;

    //2.Executa
    //Criando um objeto para receber a função
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    //executando a funçao multiplicar numero e guardando o resultado
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);
    

    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

//HP ALM Data Drive Test
let massaDivisao = [
    [10, 5, 2],
    [15, 3, 5],
    [8, 4, 2],
    [7, 0, Infinity]

];

test.each(massaDivisao) ("dividir %f /f%", (num1, num2, resultadoEsperado) => {
    //configura
    // Dados de entrada e resultado esperado são providos pela lista massa Divisao
    
   
    //Executada
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    //executando a funçao multiplicar numero e guardando o resultado
    const resultadoAtual = dividirDoisNumeros(num1,num2);
    
    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test ("dividir 27/9", ()=>{
    //configura
    const num1 =27;
    const num2 =9;
    //resultado Esperado
    resultadoEsperado = 3;
    //Executada
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    //executando a funçao multiplicar numero e guardando o resultado
    const resultadoAtual = dividirDoisNumeros(num1,num2);
    
    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test.each(arquivoJson.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado

])) 
("DDT: Dividir f% / %f", (num1, num2, resultadoEsperado) => {
    //configura
    
    //resultado Esperado

    //Executada
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    //executando a funçao multiplicar numero e guardando o resultado
    const resultadoAtual = dividirDoisNumeros(num1,num2);
    
    //3.Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

