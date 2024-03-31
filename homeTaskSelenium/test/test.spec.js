import { Builder, until, By, Key } from "selenium-webdriver";
import { expect } from "chai";

describe('Run test suit for ChromeDriver app', function() {
    let driver;

    before(async() => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    })

    after(async() => {
        await driver.quit();
    });
    it('Verify title of the main page', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementLocated(By.css('head meta[property = "og:title"]')));
        expect(await driver.getTitle()).equals('ChromeDriver - WebDriver for Chrome');
    });

    it('Click on Chrome Extension options from menu', async() => {
        let extensionOption = await driver.findElement(By.css('.Pvc6xe div.PsKE7e.qV4dIc.Qrrb5.YSH9J a[href = "/extensions"]'));
        await extensionOption.click();
        await driver.wait(until.elementLocated(By.css('div.VLoccc.K5Zlne.QDWEj.U8eYrb')));
        let mainHeader = await driver.findElement(By.css('div.VLoccc.K5Zlne.QDWEj.U8eYrb'));
        await driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", mainHeader);
        await driver.wait(until.elementLocated(By.css('head meta[property = "og:title"]')));
        expect(await driver.getTitle()).equals('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
    });

    it('Enter driver keyword in search and verify search result', async() => {
        let searchIcon = await driver.findElement(By.css('div.RBEWZc span.Ce1Y1c'));
        await searchIcon.click();
        await driver.wait(until.elementLocated(By.css('div.Xb9hP input')));
        let inputField = await driver.findElement(By.css('div.Xb9hP input'));
        await inputField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.wait(until.elementsLocated(By.css('div.DLXGJd div.gtazFe:nth-child(1)')));
        let firstSearchResult = await driver.findElement(By.css('div.DLXGJd div.gtazFe:nth-child(1)'));
        expect(await firstSearchResult.getText()).contains('driver' || 'Driver');
    });

    it('Verify URL for Mobile Emulation', async() => {
        let backButton = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.h3nfre.M9Bg4d span.Ce1Y1c'));
        await backButton.click();
        await driver.wait(until.elementLocated(By.css('div.VLoccc.K5Zlne.QDWEj.U8eYrb')));
        let advancedOption = await driver.findElement(By.css('nav.plFg0c li.VsJjtf.oXBWEc a.aJHbb.dk90Ob.jgXgSe.HlqNPb'));
        await advancedOption.click();
        await driver.wait(until.elementsLocated(By.css('div.oGuwee.eWDljc.RPRy1e.Mkt3Tc.FWGjId.jymhMd li.ijMPi a[href = "/mobile-emulation"]')));
        let mobileEmulationOption = await driver.findElement(By.css('div.oGuwee.eWDljc.RPRy1e.Mkt3Tc.FWGjId.jymhMd li.ijMPi a[href = "/mobile-emulation"]'));
        await mobileEmulationOption.click();
        await driver.wait(until.elementLocated(By.css('div.VLoccc.K5Zlne.QDWEj.U8eYrb')));
        expect(await driver.getCurrentUrl()).to.contain('/mobile-emulation');
    })
})
