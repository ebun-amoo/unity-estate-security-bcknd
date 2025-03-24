# Unity Estate Security Backend

## 🚀 Project Overview
This is the backend for the Unity Estate Security system, built with **Node.js**, **Express**, **Supabase**, and deployed on **Vercel**.

## 📌 Features
- User authentication & authorization
- Role-based access control (Security, Resident, Admin)
- API endpoints to manage users
- PostgreSQL database with Supabase
- Hosted on Vercel for seamless deployment

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (via Supabase)
- **Hosting:** Vercel
- **Environment Variables:** Managed via Vercel dashboard

## 📂 Project Structure
```
backend/
│── src/
│   ├── config/
│   │   ├── supabase.ts  # Supabase configuration
│   ├── routes/
│   │   ├── userRoutes.ts # API routes in progress
│   ├── server.ts        # Main server file
│── package.json         # Project dependencies
│── vercel.json          # Vercel deployment config
│── tsconfig.json        # TypeScript configuration
```

## 🏗️ Setup & Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/ebun-amoo/unity-estate-security-bcknd.git
cd unity-estate-security-bcknd
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Setup environment variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL=postgresql://your_user:your_password@your_host:5432/your_database
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4️⃣ Run locally
```sh
npm run dev
```

### 5️⃣ Deploy to Vercel
```sh
vercel --prod
```

## 🚦 Testing the API
### **Check database connection**
```sh
curl https://unity-estate-security-bcknd.vercel.app/test
```

## 📜 API Endpoints
| Method | Endpoint   | Description             |
|--------|-----------|-------------------------|
| GET    | `/test`    | Test database connection |
| POST   | `/users`   | Create a new user       |
| GET    | `/users`   | Get all users           |
(Endpoints still in progress 🚧)

## 🛠️ Troubleshooting
### **1️⃣ Cannot find module '@supabase/supabase-js'**
Solution: Install Supabase SDK
```sh
npm install @supabase/supabase-js
```

## 🔗 Useful Links
- [Supabase Docs](https://supabase.com/docs)
- [Express.js Docs](https://expressjs.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---
💡 *Built by [ebun-amoo](https://github.com/ebun-amoo) and [freshpex](https://github.com/freshpex/)*

