Here’s a `README.md` file tailored for your project:

---

````markdown
# 📝 To-Do List App (Full Stack)

A full-stack To-Do List web application built with **React** on the frontend and **Express + Sequelize + PostgreSQL** on the backend. It allows users to add, edit, complete, and delete tasks — a clean example of CRUD operations.

---

## 🚀 Tech Stack

### 📦 Backend
- **Node.js** & **Express.js** – Server and REST API
- **Sequelize ORM** – Database modeling and migrations
- **PostgreSQL** – Relational database
- **Swagger** – Auto-generated API documentation

### 💻 Frontend
- **React** – UI Library
- **shadcn/ui** – Modern Tailwind UI components
- **React Router** – Page navigation
- **Lucide Icons** – Icon system

---

## ⚙️ Setup Instructions

### Backend Setup

1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/To-Do-List-Express.git
   cd To-Do-List-Express/backend
````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Database Configuration**:

   ⚠️ **NOTE**: This project does **not include** `config/config.json`.
   Please create your own `config/config.json` file for Sequelize to connect to your PostgreSQL instance.

   Example:

   ```json
   {
     "development": {
       "username": "your_db_user",
       "password": "your_db_password",
       "database": "your_db_name",
       "host": "127.0.0.1",
       "dialect": "postgres"
     }
   }
   ```

4. **Run migrations**:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the backend server**:

   ```bash
   node server.js
   ```

6. **API Documentation (Swagger)**:
   Visit: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

### Frontend Setup

1. Go to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm run dev
   ```

---

## 🛠 Features

* ✅ Add tasks
* 📝 Edit task name
* 📌 Mark task as complete/incomplete
* 🗑 Delete task
* ♻️ Reset and delete all tasks
* 🔍 REST API with full Swagger docs

---

## 📁 Folder Structure

```
backend/
├── models/
├── migrations/
├── routes/
├── server.js
├── swagger.js
└── config/   <-- You must add your own config.json here
```

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

**Justin Hadinata - 2702298236**

```

---

Let me know if you want a deployment guide, frontend README, or GitHub Actions setup!
```
