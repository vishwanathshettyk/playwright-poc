const { common_selectors } = require('./selectors/common_selectors')
const { test,expect } = require('@playwright/test');


export class IdentifcationPage{
    constructor(page) {
        this.page = page;
        this.main_selectors = page.locator(common_selectors.app)
        .locator(common_selectors.cardIntor)
        .locator(common_selectors.mainContainer)
        .locator(common_selectors.container);
    }


   async enterCustomerCif(text)
    {
        await this.main_selectors.locator(common_selectors.customercode).locator(common_selectors.input).fill(text);
    }

    async enterDateOfBirth(text)
    {
        await this.main_selectors.locator(common_selectors.dateofbirth).locator(common_selectors.input).fill(text);
    }

    async clickContinueButton()
    {
        await this.main_selectors.locator(common_selectors.continue_button).click();
    }
}
