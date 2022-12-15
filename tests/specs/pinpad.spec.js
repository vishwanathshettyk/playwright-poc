import { PinPadPage } from '../pages/pinpad-page';
const {test} = require('./login.spec')
let pinPadPage ;

//test.describe.configure({mode:"serial"});

test.describe("login to application",() => {

    test.beforeEach(async ({login, enterCredentials}) => {
        login.launchBrowser
        enterCredentials
    });

    test("pinpad navigation", async ({page}) =>
    {
        pinPadPage = new PinPadPage(page)
        await page.waitForTimeout(10000)
        await page.getByText("Pinpad Means").click();

        await page.waitForTimeout(2000)
        await pinPadPage.clickOnPinPad("Uno"); 

        await page.waitForTimeout(1000)
        await pinPadPage.clickOnPinPad("Uno");     

        await page.waitForTimeout(1000)
        await pinPadPage.clickOnPinPad("Uno");    

        await page.waitForTimeout(1000)
        await page.locator(".continue__button").click();

        await page.waitForTimeout(1000)
    });
})

