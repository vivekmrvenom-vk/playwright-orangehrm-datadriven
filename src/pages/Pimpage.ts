import { Page, expect } from '@playwright/test';
import { BasePage } from './Basepage';

export class PimPage extends BasePage {
constructor(page: Page) {
        super(page);
    }
    async gotoPim()
{
        await this.page.click("(//a[@class='oxd-main-menu-item'])[2]");
} 
   async verifyPimPage() {
        await expect(this.page.locator('//h6[normalize-space()="PIM"]' )).toHaveText('PIM');
    }
}