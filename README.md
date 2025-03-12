# Firebase Todo List

Welcome to the **Firebase Todo List** project! This guide will help you set up the project on your local machine, install dependencies, and configure Firebase authentication and Firestore database.

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**

First, clone the repository to your local machine:

```sh
git clone https://github.com/JustinHadinataCS/Firebase-Todolist.git
cd Firebase-Todolist
```

### **2️⃣ Install Dependencies**

Run the following command to install all necessary dependencies:

```sh
npm install
```

---

## 🔥 Firebase Configuration

To use Firebase services, you need to **create a configuration file** with your Firebase credentials.

### **3️⃣ Create a Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add Project"** and follow the setup instructions.
3. Inside your project, navigate to **Project Settings > General**.
4. Scroll down to **"Your apps"** and click **"Web"** to register a new app.
5. Copy the **Firebase config object** provided.

### **4️⃣ Set Up the Firebase Configuration File**

Create a new folder inside `src/` called **`config/`**, then create a file named **`firebase.js`** inside it:

📁 **Project Structure:**

```
Firebase-Todolist/
├── src/
│   ├── config/
│   │   ├── firebase.js  👈 Create this file
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

### **5️⃣ Add Firebase Config to `firebase.js`**

Paste your Firebase credentials inside `src/config/firebase.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔒 Replace this with your actual Firebase config!
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
```

**Make sure to replace** `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., with your actual Firebase credentials.

---

## ▶️ Running the Project

Once everything is set up, start the project using:

```sh
npm start
```

This will launch the development server. Open [**http://localhost:3000**](http://localhost:3000) in your browser to see the app.

---

## 🌟 Features

✅ Google Authentication with Firebase Auth  
✅ Firestore Database for storing todos  
✅ User-friendly interface  

---

## 📌 Notes

- Do **NOT** push your `firebase.js` file to GitHub. Add it to `.gitignore` to keep it private.
- If you accidentally commit sensitive information, remove it from history using `git filter-repo`.

---

## 🛠 Troubleshooting

If you run into issues, try:

```sh
npm install  # Reinstall dependencies
rm -rf node_modules package-lock.json && npm install  # Full reset
```

Still need help? Feel free to open an issue in the GitHub repository!

---

Additional Resources: https://www.youtube.com/watch?v=2hR-uWjBAgw&t

---


🚀 **Happy Coding!** 🎉
