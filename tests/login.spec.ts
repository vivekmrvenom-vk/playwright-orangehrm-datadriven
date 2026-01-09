import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/Loginpage';
import { PimPage } from '../src/pages/Pimpage';
import { UserPage } from '../src/pages/Userpage';
import { readExcelData, result } from '../src/utils/excelutil';
import { LogoutPage } from '../src/pages/Logoutpage';

test.describe.configure({ mode: 'serial' });

test.beforeEach('Valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);
  const userPage = new UserPage(page);
  await loginPage.open();
  await loginPage.login("Admin", "admin123");
  await pimPage.gotoPim();
 // await pimPage.verifyPimPage();
});

test('Validate employee data from Excel in OrangeHRM', async ({ page }) => {
   test.setTimeout(100_000);
  const userPage = new UserPage(page);
  const testData = await readExcelData();

  let failedRecords: string[] = []; 

  for (const data of testData) {

     try {
      await userPage.searchByEmployeeId(data.Id);
      const isFound = await userPage.isRecordFound();
      console.log(`🧪 isRecordFound() returned: ${isFound}`);
      await result(
        data.rowNumber,
        isFound ? 'PASS' : 'FAIL'
      );

      if (!isFound) {
        failedRecords.push(`Row ${data.rowNumber} | ID ${data.Id}`);
      }

    } catch (error) {
      await result(data.rowNumber, 'FAIL');
      failedRecords.push(`Row ${data.rowNumber} | ID ${data.Id} (Exception)`);
    }
  }

  //Validate Excel completeness
  const { checkAllResultsFilled } = await import('../src/utils/excelutil');
  const allFilled = await checkAllResultsFilled(testData);
  expect(allFilled).toBeTruthy();

  //FINAL SOFT ASSERTION
  // expect(
  //   failedRecords,
  //   `Some employee validations failed:\n${failedRecords.join('\n')}`
  // ).toHaveLength(0);
});

test.afterEach(async ({ page }) => {
  const logoutPage = new LogoutPage(page);
  await logoutPage.logout();
});