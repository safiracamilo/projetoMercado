// bibliotecas
const { Builder, By} = require('selenium-webdriver')
require('chromedriver')
const assert = require('assert')

// suite de teste
describe('Comprar Passagem WD', () => {
    let driver // objeto parar ser o Selenium

// Inicialização
    beforeEach(async() => {
        driver = await new Builder()
            .forBrowser('chrome')
            .build()
            driver.manage().setTimeouts({ implicit: 60000 })
            driver.manage().window().maximize()
    })
// Finalização
    afterEach(async() => {
        await driver.quit()

    })
// Teste

    it("Comprar Passagem SP - CA", async() => {
        await driver.get("https://www.blazedemo.com")
        {
            const dropdwon = await driver.findElement(By.name("fromPort"))
            await dropdwon.findElement(By.xpath("//option[. = 'São Paolo']")).click()        
        }

        {
            const dropdwon = await driver.findElement(By.name("toPort"))
            await dropdwon.findElement(By.xpath("//option[. = 'Cairo']")).click()        
        }

    
       // clicar no botão Find  Flights (Procurar voos)
       await driver.findElement(By.css('input.btn.btn-primary')).click()

     
       // validar o titulo da guia e a frase de titulo da selação dos vôos
       assert(await driver.getTitle() == 'BlazeDemo - reserve')
       assert(await driver.findElement(By.xpath('//h3')).getText() == 'Flights from São Paolo to Cairo:')



       


    })
})
