# **playwright-automation**

*Playwright Automation is a project I created to learn web test automation using Playwright. It focuses on functional, end-to-end (E2E), and regression testing to ensure applications run optimally across different browsers. This project helps me enhance my skills in scripting, API testing, parallel execution, and CI/CD integration.*

**Playwright Automation** adalah proyek yang saya buat untuk mempelajari otomatisasi pengujian web dengan Playwright. Fokusnya pada pengujian **fungsional, E2E, dan regresi** untuk memastikan aplikasi berjalan optimal di berbagai browser. Proyek ini membantu saya meningkatkan keterampilan dalam **scripting, pengujian API, eksekusi paralel, dan integrasi CI/CD**.

---

## **Getting Started

### **1. Clone the Repository / Clone Repository**

First, clone the repository using the following command:\
Pertama, clone repositori menggunakan perintah berikut:

```bash
git clone https://github.com/andriraymond/playwright-automation.git
```

Then, navigate to the project directory:\
Kemudian, masuk ke direktori proyek:

```bash
cd playwright-automation
```
<br>

![alt text](https://res.cloudinary.com/gocapje/image/upload/v1741961988/github/playwright-automation/screenshot-01_w0upyh.png)

---

### **2. Open the Project in VS Code**

Run the following command to open the project in **VS Code**:\
Jalankan perintah berikut untuk membuka proyek di **VS Code**:

```bash
code .
```

---

### **3. Install Playwright**

To install Playwright, use the command below:\
Untuk menginstal Playwright, gunakan perintah berikut:

```bash
npm init playwright
```
<br>

![alt text](https://res.cloudinary.com/gocapje/image/upload/v1742048181/github/playwright-automation/screenshot-02_tcgolf.png)

After installation, the `example.spec.js` file will appear inside the `tests` folder.\
Setelah instalasi selesai, file `example.spec.js` akan muncul di dalam folder `tests`.

📌 **You can modify the test file or add new test files as needed.**\
📌 **Anda dapat memodifikasi file uji atau menambahkan file uji baru sesuai kebutuhan.**

If you want, you can delete the `tests-examples` folder.\
Jika diinginkan, Anda bisa menghapus folder `tests-examples`.

---

## **Running Test Cases**

### **1. Run All Tests**

To execute all test cases, run:\
Untuk menjalankan semua test case, gunakan perintah berikut:

```bash
npx playwright test
```

To run Playwright in UI mode, use:\
Untuk menjalankan Playwright dalam mode UI, gunakan:

```bash
npx playwright test --ui
```
Or, to run the tests with a visible browser window without UI mode, use the --headed option:

```bash
npx playwright test --headed
```

---

### **2. Run a Specific Test File**

If you want to execute a specific test file, use:\
Jika ingin menjalankan satu file test tertentu, gunakan:

```bash
npx playwright test tests/auth/login.spec.js
```

---

### **3. Run All Tests in a Folder**

To run all tests inside a specific folder, use:\
Untuk menjalankan semua test dalam satu folder tertentu, gunakan:

```bash
npx playwright test tests/auth/
```

---

## **Viewing Test Reports**

To generate and view test reports, use the following command:\
Untuk menghasilkan dan melihat laporan hasil pengujian, gunakan perintah berikut:

```bash
npx playwright show-report
```

---


<!-- npm install --save-dev dotenv -->