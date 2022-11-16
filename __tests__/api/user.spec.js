//Bibliotecas
const supertest = require("supertest"); // Framework de Teste de API
const assert = require("chai").assert; // Função de assertiva do resultado

const baseUrl = "https://petstore.swagger.io/v2"; // url base da API
let frase;
let token;
describe("PetShore Swagger - Userr", () =>{
    
    const request = supertest(baseUrl);

    it("Get User Login", () => {
        // Configura
        username = "abcdef";
        password = "12345";

        // Executa
        return request
               .get("/user/login?username=" + username + "&password=" + password)
               .then((response) => {
                    assert.equal(response.statusCode, 200);
                    assert.equal(response.body.code, 200);
                    assert.equal(response.body.type, "unknown");
                    mensagem = response.body.message;
                    frase = mensagem.substring(0,mensagem.indexOf(":") + 1);
                    console.log("A frase é:" + frase);
                    assert.equal(frase, "logged in user session:");
                    token = mensagem.substring(mensagem.indexOf(":") + 1);
                    console.log("O Token é " + token);



               }); // fim do then
                     

    



    }); // fim do It
    //


});