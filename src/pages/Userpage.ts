import { Page, Locator, expect } from '@playwright/test';
export class UserPage {
     constructor(private page: Page) {}
private recordCount = () =>
    this.page.locator(
      'div.orangehrm-horizontal-padding span.oxd-text--span'
    );
    private tableRows = () =>
    this.page.locator('.oxd-table-card');
  private empIdInput() {
    return this.page.locator(
      'label:has-text("Employee Id") >> xpath=../..//input'
    );
  }
  private searchBtn() {
    return this.page.locator('button:has-text("Search")');
  }
  private recordCountText() {
    return this.page.locator('span.oxd-text--span');
  }
  
    async searchByEmployeeId(empId: string) {
    await this.empIdInput().fill(empId);
    await this.page.getByRole('button', { name: 'Search' }).click();
  //  await this.searchBtn().click();
  }
  async isRecordFound(): Promise<boolean> {
    await this.page.waitForSelector(
      'div.orangehrm-horizontal-padding',
      { timeout: 10000 }
    );
    const texts = await this.recordCount().allInnerTexts();
    console.log('📌 Record count texts from UI:');
    texts.forEach(t => console.log(`➡ "${t}"`));

 const recordText = texts.find(t => t.includes('Record'));

    if (!recordText) {
      console.log('❌ No Record Found text present');
      return false;
    }
    if (recordText.includes('(1)')) {
    console.log('✅ EMPLOYEE FOUND');
    return true;
  }
console.log('❌ EMPLOYEE NOT FOUND');
  return false;
  }
//   async validateUserPage(excelData: any[],expectedCount: number = 1) {
//    // Verify that the number of rows found matches expected count
//     const expectedText = `(${expectedCount})Record Found`;
//     // Wait for the record count text to be visible

//    // await this.recordCountText.first().waitFor( { state: 'visible' });
//     const actualText = "(1)Record Found";
//    //  console.log(`Record Count UI Text → ${actualText}`);

//     if (actualText !== expectedText) {
//       throw new Error(
//         `❌ Record count mismatch. Expected "${expectedText}" but found "${actualText}"`
//       );
//     }

//  await this.page.isEnabled('.oxd-table-card');

//   const rowCount = await  this.tableRows.count();

    //Compare with ALL excel rows
    // let matchFound = false;
    // for (const excel of excelData) {
    //   if (
    //    uiId === excel.Id ||
    //     uiFirst.includes(excel.FirstName.toLowerCase()) ||
    //     uiLast === excel.LastName.toLowerCase()
    //   ) {
    //     console.log('✅ MATCH FOUND IN EXCEL');
    //     matchFound = true;
    //     break;
    //   }
    // }
  }


function timeout(arg0: number) {
    throw new Error('Function not implemented.');
}
