export class PinPadPage {
    constructor(page)
    {
        this.page = page;
    }

    async clickOnPinPad(pin)
    {
        await this.page.pause();
        await this.page.getByRole('button',{name: pin}).click();  
    }

}