// @ts-check
import { IdentifcationPage } from '../pages/identification-page'

//const IdentifcationPage = require('../pages/identification-page')

const fs = require('fs');
const {datapath} = require('../utilities/data-index')

const env = process.env.ENV;
let path = datapath.user.replace('$env',env);
let loginPage
let data
let baseUrl = process.env.Url;

const base  = require('@playwright/test');

const test = base.test.extend({
    login: async ({ page }, use) => {
  
        const launchBrowser = await page.goto(baseUrl + '/login');
        await use(page);
    },
    enterCredentials: async ({ page }, use) => {
  
        loginPage = new IdentifcationPage(page);
        var jsonData = fs.readFileSync(path);
        data = JSON.parse(jsonData.toString()); 
        await loginPage.enterCustomerCif(data.validUsers.username);
        await loginPage.enterDateOfBirth(data.validUsers.dob);
        await loginPage.clickContinueButton();
        await use(page);
    },
  });

  exports.expect = base.expect;
  export {test}
  
