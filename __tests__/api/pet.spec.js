//Bibliotecas
const supertest = require("supertest"); // Framework de Teste de API
const assert = require("chai").assert; // Função de assertiva do resultado

const baseUrl = "https://petstore.swagger.io/v2"; // url base da API
const petId = 5191985; // codigo do animal

// Descricao  = Conjutos de Testes ~ Classe


describe("PetStore Swagger - Pet", () => {
    const request = supertest(baseUrl);

    // Post - Teste de incluir um animal
    it("Post Pet", () => {
        // Configura
        // Apontou para o arquivo com os dados do animal        
        const jsonFile = require("../../vendors/json/pet1");
        // Realizar a requisição e receber a resposta

        // Executa
        return request // chamada para requisição
            .post("/pet") // endpoint / função para incluir o animal
            .send(jsonFile) // envia os dados no corpo da requisição
            // Valida
            .then((response) => {
               assert.equal(response.statusCode, 200); // Se a requisição foi recebida e processada
               assert.equal(response.body.id, petId); // Se é o id esperado do animal
               assert.equal(response.body.name,"Lis"); // Se é o nome esperado
               assert.equal(response.body.status,"available"); // Se está com status esperado
            });
    });

    // Consulta o animal pelo petID
    it("Get Pet",() => {
        return request     // chamada para requisição
            .get("/pet/" + petId)  // consultar o anima pelo id
            .then ((response) => {  // tratar a resposta / retorno
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, petId);
                assert.equal(response.body.name, "Lis");
                assert.equal(response.body.status,"available");
            });
    })

    // Alterar dados do animal
    it("Put Pet", () => {
        // apontar para o arquivo json com a alteração desejada
        const jsonFile = require("../../vendors/json/pet2");
        return request      // realizar a requisição
            .put("/pet")    // alterar o animal - aponta para endpoint
            .send(jsonFile)  // json com a alteração
            .then((response) => {  // receber e validar a resposta
                assert.equal(response.statusCode, 200);
                assert.equal(response.body.id, petId);
                assert.equal(response.body.name, "Lis");
                assert.equal(response.body.tags[1].id, 4);
                assert.equal(response.body.tags[1].name, "castrated");
                assert.equal(response.body.status, "solded");

            }); // fecha o then   

    });  // fecha o it

    it ("Delet Pet", () => {
        return request
            .delete("/pet/" + petId)
            .then((response) => {
                assert.equal(response.statusCode,200)
            });
    });

}); // fecha o describe


