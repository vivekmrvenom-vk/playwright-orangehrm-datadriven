# playwright-orangehrm-datadriven
Playwright + TypeScript automation framework using Page Object Model and Excel-driven data validation for OrangeHRM.
📌 Project Overview
This project is a Playwright + TypeScript automation framework built to validate employee data in the OrangeHRM application using a data-driven approach with Excel.
The framework follows Page Object Model (POM) design for scalability, maintainability, and clean test structure.

🚀 Tech Stack
Playwright
TypeScript
Page Object Model (POM)
ExcelJS (Data-Driven Testing)
Node.js
VS Code

🧩 Framework Highlights
End-to-end automation covering:
Login
PIM → Employee Search
Employee validation
Logout
Data-driven testing using Excel for input and result reporting
Single test execution flow validating multiple employee records
Auto-waiting & synchronization using Playwright best practices
Soft assertion strategy to continue execution for all data rows
Results written back to Excel as PASS / FAIL
Clean separation of concerns using POM architecture

📂 Project Structure
PlayWrightHYB/
│
├── tests/
│   └── login.spec.ts          # Main test file (single test execution)
│
├── src/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── PimPage.ts
│   │   ├── UserPage.ts
│   │   └── LogoutPage.ts
│   │
│   └── utils/
│       └── excelutil.ts       # Excel read/write utilities
│
├── testdata.xlsx              # Test data & result file
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md

📊 Data-Driven Testing (Excel)

Excel Columns:
Column	Description
A	Employee ID
B	First Name
C	Last Name
D	Result (PASS / FAIL)
Test reads employee data from Excel
Searches employee by ID in UI
Validates result using UI status:
(1) Record Found → PASS
No Records Found → FAIL
Writes result back to Excel automatically

🧪 Test Flow
Launch browser
Login to OrangeHRM
Navigate to PIM → Employee List
Read employee data from Excel
Search employee by ID
Validate record status from UI
Write PASS / FAIL to Excel
Logout
Close browser

▶️ How to Run the Tests
Install dependencies
npm install

Run tests
npx playwright test
Run tests in headed mode
npx playwright test --headed

🛠 Key Automation Concepts Used
Page Object Model (POM)
Data-Driven Testing
Soft Assertions
Dynamic Locator Handling
Auto-waits (no hard waits)
Utility-driven framework design

📈 Why This Project?
This framework demonstrates:
Modern automation skills using Playwright
Strong framework design principles
Real-world data validation scenarios
Resume-level automation experience

👤 Author
Vivek M R
Automation Test Engineer
