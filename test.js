const {Builder, By, Key, util, Actions, List, WebElement} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    
        await driver.get('https://opensource-demo.orangehrmlive.com/');

        await driver.findElement(By.id("txtUsername")).sendKeys("Admin", Key.ENTER);
        await driver.findElement(By.id("txtPassword")).sendKeys("admin123", Key.ENTER);

        await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
        await driver.findElement(By.id("menu_admin_UserManagement")).click();
        await driver.findElement(By.id("menu_admin_viewSystemUsers")).click();
        await driver.findElement(By.id("btnAdd")).click();

        await driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys("Admin A");
        await driver.findElement(By.id("systemUser_userName")).sendKeys("Alexandra Pautynka");
        await driver.findElement(By.id("systemUser_password")).sendKeys("12345678");
        await driver.findElement(By.id("systemUser_confirmPassword")).sendKeys("12345678");
        await driver.findElement(By.id("btnSave")).click();
        await driver.sleep(3 * 1000);

        await driver.findElement(By.id("searchSystemUser_userName")).sendKeys("Alexandra Pautynka");
        await driver.findElement(By.id('searchSystemUser_employeeName_empName')).sendKeys("Admin A");
        await driver.findElement(By.id("searchBtn")).click();

        await driver.findElement(By.id("resetBtn")).click();
        const el = await driver.findElement(By.xpath("//td[@class='left']/a[text()='Alexandra Pautynka']"));
        const row = await el.findElement(By.xpath("./../.."));
        await row.findElement(By.xpath('td[text()="ESS"]'));
        await row.findElement(By.xpath('td[text()="Admin A"]'));
        await row.findElement(By.xpath('td[text()="Enabled"]'));
        await row.findElement(By.xpath('td[1]/input')).click();
        await driver.sleep(3 * 1000);

        await driver.findElement(By.id("btnDelete")).click();
        await driver.findElement(By.id('dialogDeleteBtn')).click();

        await driver.findElement(By.id("searchSystemUser_userName")).sendKeys("Alexandra Pautynka");
        await driver.findElement(By.id('searchSystemUser_employeeName_empName')).sendKeys("Admin A");
        await driver.findElement(By.id("searchBtn")).click();
};
example();