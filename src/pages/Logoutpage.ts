import { BasePage } from './Basepage';

export class LogoutPage extends BasePage {

  async logout() {
    await this.page.click(  'p.oxd-userdropdown-name' );
    await this.page.click( 'a:has-text("Logout")' );
    await this.page.close();
  } 

}