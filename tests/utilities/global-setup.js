const { chromium } = require('@playwright/test');

module.exports = async config => {
//   const { baseURL, storageState } = config.projects[0].use;
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto(baseURL);
//   await page.getByLabel('User Name').fill('user');
//   await page.getByLabel('Password').fill('password');
//   await page.getByText('Sign in').click();
//   await page.context().storageState({ path: storageState });
//   await browser.close();
};

module.exports = async environment => {

    process.env.Env = process.env.test_env != null ? process.env.test_env : "tst";

    if(process.env.Env == "tst")
    {
      process.env.url = "https://test.application.net";
      
    }else if(process.env.Env =="acc")
    {
      process.env.url = "https://acc.application.net";
    }
  };