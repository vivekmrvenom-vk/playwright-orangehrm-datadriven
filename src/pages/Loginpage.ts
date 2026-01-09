import { BasePage } from './Basepage';
export class LoginPage extends BasePage {

  async open() {
    await this.navigate('');
       await this.page.waitForSelector("//label[text()='Username']", { timeout: 20000 });
     // await this.page.waitForSelector('[placeholder="Username"]', { timeout: 30000 });
  }

  async login(username: string, password: string) {
   await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.click("//button[@type='submit']");
  }
}
