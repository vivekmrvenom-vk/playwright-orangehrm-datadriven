import ExcelJS from 'exceljs';
import path from 'path';

const filePath = path.join(__dirname, '../../test-data/Employees.xlsx');

interface EmployeeData {
  Id: string;
  FirstName: string;
  LastName: string;
  rowNumber: number;
}

/**
 * Reads employee data from the first worksheet
 */
export async function readExcelData(): Promise<EmployeeData[]> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = workbook.worksheets[0];
  if (!sheet) {
    throw new Error('No worksheet found in Excel file');
  }

  const data: EmployeeData[] = [];

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) return; // skip header row

    data.push({
      Id: String(row.getCell(1).value ?? ''),
      FirstName: String(row.getCell(2).value ?? ''),
      LastName: String(row.getCell(3).value ?? ''),
      rowNumber
    });
  });

  return data;
}

const GREEN = 'FF00FF00';
const RED = 'FFFF0000';
export async function result(
  rowNumber: number, status: 'PASS' | 'FAIL') {

 const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = workbook.worksheets[0]; // single sheet
  // only last column

  const cell = sheet.getCell(`D${rowNumber}`);

  cell.value = status;
  // cell.fill = {
  //   type: 'pattern',
  //   pattern: 'solid',
  //   fgColor: { argb: status === 'PASS' ? GREEN : RED }
  // };

  // if (status === 'PASS') {
  //   cell.fill = {
  //     type: 'pattern',
  //     pattern: 'solid',
  //     fgColor: { argb: GREEN } // green
  //   };
  // } 
  // else {
  //   cell.fill = {
  //     type: 'pattern',
  //     pattern: 'solid',
  //     fgColor: { argb: RED } // red
  //   };
  // }
  await workbook.xlsx.writeFile(filePath);
}
export async function checkAllResultsFilled(
  testData: EmployeeData[]) {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const sheet = workbook.worksheets[0];
  if (!sheet) throw new Error('No worksheet found');

  for (const data of testData) {
    const value = sheet.getCell(`D${data.rowNumber}`).value;
    if (!value) return false;
  }

  return true;
}
