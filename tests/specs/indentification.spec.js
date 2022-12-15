// // @ts-check
// const {test} = require('./login.spec')
// import { IdentifcationPage } from '../pages/identification-page'
// const fs = require('fs');
// const {datapath} = require('../utilities/data-index')

// const env = process.env.ENV;
// let path = datapath.user.replace('$env',env);
// let loginPage
// let data

// test.describe("navigation", () => {

//   test.beforeEach(async ({login,page}) => {
//     //await page.goto('/it-identification');
//     login.launchBrowser
//     loginPage = new IdentifcationPage(page);

//     var jsonData = fs.readFileSync(path);
//     data = JSON.parse(jsonData.toString()); 
//   });

// test('valid-users', async ({ page }) => {

//   await loginPage.enterCustomerCif(data.validUsers.cif);
//   await loginPage.enterDateOfBirth(data.validUsers.dob);
//   await loginPage.clickContinueButton();
//   await new Promise(r => setTimeout(r, 4000));
// });

// test('invalid-users', async ({ page }) => {

//   await loginPage.enterCustomerCif(data.invalidUsers.cif);
//   await loginPage.enterDateOfBirth(data.invalidUsers.dob);
//   await loginPage.clickContinueButton();
//   await new Promise(r => setTimeout(r, 4000));
// })

// });
