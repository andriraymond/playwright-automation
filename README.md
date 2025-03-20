# playwright-auomation

*Playwright Automation is a project I created to learn web test automation using Playwright. It focuses on functional, end-to-end (E2E), and regression testing to ensure applications run optimally across different browsers. This project helps me enhance my skills in scripting, API testing, parallel execution, and CI/CD integration.*

Playwright Automation adalah proyek yang saya buat untuk mempelajari otomatisasi pengujian web dengan Playwright. Fokusnya pada pengujian fungsional, E2E, dan regresi untuk memastikan aplikasi berjalan optimal di berbagai browser. Proyek ini membantu saya meningkatkan keterampilan dalam scripting, API testing, parallel execution, dan CI/CD.


## Getting Started

First to run playwright :
```bash
git clone https://github.com/andriraymond/playwright-automation.git
```
and then, open the project directory

```bash
cd "playwright-automation"
```
<br>

![alt text](https://res.cloudinary.com/gocapje/image/upload/v1741961988/github/playwright-automation/screenshot-01_w0upyh.png)

run the following command to open VS Code.

```bash
code .
```

install playwright
```bash
npm init playwright
```

<!-- ![alt text](https://res.cloudinary.com/gocapje/image/upload/v1741962564/github/playwright-automation/screenshot-02_lholtk.png)
![alt text](https://res.cloudinary.com/gocapje/image/upload/v1741962667/github/playwright-automation/screenshot-02_gg71r4.png) -->

![alt text](https://res.cloudinary.com/gocapje/image/upload/v1742048181/github/playwright-automation/screenshot-02_tcgolf.png)

Then, the example.spec.js file will appear in the tests folder. You can modify the test there or add new files as desired.

**If you want, you can delete the tests_examples folder.*

## Running Test Cases

To execute the test case, use the following command:

```bash
npx playwright test
```

Or to run Playwright with UI, use the following command:
```bash
npx playwright test --ui
```