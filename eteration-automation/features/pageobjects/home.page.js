class HomePage {
    get instructorsLink() { return $('a[href="/tr/instructors"]'); }

    async open() {
        await browser.url('https://academy.eteration.com/');
        await browser.maximizeWindow();
    }

    async navigateToInstructors() {
        await browser.pause(2000);
        
        const link = await this.instructorsLink;
        await link.waitForExist({ timeout: 5000 });
        await link.waitForClickable({ timeout: 5000 });
        await link.click();
        
        await browser.pause(3000);
    }
}

module.exports = new HomePage(); 