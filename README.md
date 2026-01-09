# playwright-orangehrm-datadriven
Playwright + TypeScript automation framework using Page Object Model and Excel-driven data validation for OrangeHRM.

📌 Project Overview

This project is a Playwright + TypeScript automation framework built to validate employee data in the OrangeHRM application using a data-driven approach with Excel.
The framework follows the Page Object Model (POM) design pattern to ensure scalability, maintainability, and clean test structure.
________________________________________
🚀 Tech Stack

•	Playwright

•	TypeScript

•	Page Object Model (POM)

•	ExcelJS (Data-Driven Testing)

•	Node.js

•	VS Code

________________________________________
🧩 Framework Highlights

•	End-to-end automation covering:

->	Login

->	PIM → Employee Search

->  Employee Validation

->	Logout



•	Data-driven testing using Excel for input and result reporting

•	Single test execution validating multiple employee records

•	Auto-waiting and synchronization using Playwright best practices

•	Soft assertion strategy to continue execution for all test data

•	Results written back to Excel as PASS / FAIL

•	Clean separation of concerns using POM architecture

________________________________________
📂 Project Structure

PlayWrightHYB/

├── tests/

│   └── login.spec.ts
│

├── src/

│   ├── pages/

│   │   ├── LoginPage.ts

│   │   ├── PimPage.ts

│   │   ├── UserPage.ts

│   │   └── LogoutPage.ts

│   │
│   └── utils/

│       └── excelutil.ts

│
├── testdata.xlsx

├── playwright.config.ts

├── package.json

├── tsconfig.json

└── README.md

________________________________________
📊 Data-Driven Testing (Excel)

Excel Columns:

Column	Description

A	Employee ID
B	First Name
C	Last Name
D	Result (PASS / FAIL)

Execution Logic:

•	Reads employee data from Excel

•	Searches employee by ID in UI

•	Validates record status using UI message:

o	(1) Record Found → PASS
o	No Records Found → FAIL

•	Writes result back to Excel automatically
________________________________________
🧪 Test Flow

1.	Launch browser
	
2.	Login to OrangeHRM
	
3.	Navigate to PIM → Employee List
	
4.	Read employee data from Excel
	
5.	Search employee by ID
	
6.	Validate record status from UI
	
7.	Write PASS / FAIL result to Excel
	
8.	Logout
	
9.	Close browser
________________________________________
▶️ How to Run the Tests

Install dependencies

npm install

Run tests

npx playwright test

Run tests in headed mode

npx playwright test --headed
________________________________________
🛠 Key Automation Concepts Used
•	Page Object Model (POM)

•	Data-Driven Testing

•	Soft Assertions

•	Dynamic Locator Handling

•	Auto-waits (no hard waits)

•	Utility-driven framework design
________________________________________
📈 Why This Project?
This framework demonstrates:

•	Modern automation skills using Playwright

•	Strong framework design principles

•	Real-world data validation scenarios

•	Resume-ready automation experience

________________________________________
👤 Author
Vivek M R
Automation Test Engineer

