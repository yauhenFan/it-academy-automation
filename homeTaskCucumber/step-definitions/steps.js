const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const Base = require('../pageobjects/base');
const HomePage = require('../pageobjects/homePage')
const Banner = require('../pageobjects/components/banner')
const WelcomeScreen = require('../pageobjects/components/welcomeScreen')

let base = new Base();
let homePage = new HomePage();
let banner = new Banner();
let welcomeScreen = new WelcomeScreen();

Given('I open web site {string}', async (url) => {
    await base.open(url);
});

 When('I close anoucement banner', async() => {
    if((await homePage.anouncementBanner).isDisplayed()) {
        await banner.closeBannerButton.click();
    }
 });

 Then('Anoucement banner is not displayed', async() => {
    if(!homePage.anouncementBanner.isDisplayed()) {
        return false;
    }
 })

 Then('I reload Web page', async() => {
    await browser.refresh();
 });

 Then('I hover over language element', async() => {
    await  homePage.languageSelect.moveTo();
 });

 When(/^"(.*)" language is displayed$/, async(text) => {
    await expect(await homePage.currentLanguageValue.getText()).toContain(text);
 })

 Then(/^I click on dropdowm element "(.*)"$/, async(liNumber) => {
    await homePage.dropDownLanguageValue(liNumber).click();
 })

 When("I click on Welcome icon", async() => {
    await homePage.welcomeIcon.click();
 })

 Then("I click on set script option from Welcome", async() => {
    if(welcomeScreen.setScriptOption.isDisplayed()) {
        await welcomeScreen.setScriptOption.click();
    }
 });

 Then("Suggestion list displays in Welcome window", async() => {
    await welcomeScreen.welcomeSuggestList.isDisplayed();
 });

 When(/^I click on Nav Menu "(.*)" option$/, async(item) => {
    await homePage.navMenuOptions(item).click();
 });

 Then(/^Url parameter has "(.*)"$/, async(urlText) => {
    await expect(await browser.getUrl()).toContain(urlText);
 })