# 🔁 Skill Swap Platform

A web-based platform that allows users to **list their skills**, **find others with complementary skills**, and **initiate direct swap requests**. Built to promote **collaborative learning** and **community growth**.

---

## 🌟 Features

- 🔐 User Authentication (Signup/Login with JWT)
- 👤 User Profile (Skills Offered, Skills Wanted, Availability)
- 🔍 Public Directory with Search by Skill
- 🔁 Skill Swap Requests (Send, Accept, Reject, Delete)
- ⭐ Public/Private profile toggle
- 🧾 Swap History (sent/received)
- 🛠️ Admin-ready backend (ban users, review activity)

---

## 🧰 Tech Stack

### 🔗 Frontend
- React (Vite or CRA)
- Axios
- React Router
- Tailwind CSS

### 🧪 Backend
- Node.js + Express
- MongoDB (via Mongoose)
- JWT Authentication
- dotenv for config

---

## 🛠️ Local Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/skill-swap-platform.git
cd skill-swap-platform
2. Backend Setup (/server)
bash
Copy
Edit
cd server
npm install
🔐 Create .env file
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/skillSwapDB
JWT_SECRET=your_secure_secret
bash
Copy
Edit
npm run dev
3. Frontend Setup (/client)
bash
Copy
Edit
cd ../client
npm install
npm start
