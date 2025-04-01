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

## 🚦 Testing the API
### **Check database connection**
```sh
curl https://unity-estate-security-bcknd.vercel.app/users
```

## 📜 API Endpoints

### **Authentication**
| Method | Endpoint   | Description             |
|--------|-----------|-------------------------|
| POST   | `/signup`    | Create a new user account |
| POST   | `/login`    | Authenticate a user and return a token |
| POST   | `/reset_password` | Initiate password reset process |
| POST   | `/update_password` | Update user password after reset |

### **Users**
| Method | Endpoint   | Description             |
|--------|-----------|-------------------------|
| GET    | `/users`   | Get all users           |
| GET    | `/users/:id`   | Get user profile by ID |
| GET    | `/profile`   | Get the authenticated user's profile |

### **Setup & Deployment**
- The backend is now hosted on **Vercel**.
- Environment variables are managed via **Vercel's env system**.
- Authentication is handled using **Supabase Auth**.
- Database queries are performed via **Supabase Client**.

### **Folder Structure**
```
/backend
│── /src
│   ├── /auth     # Authentication routes (signup, login, password reset, update password)
│   │   ├── signup.ts
│   │   ├── login.ts
│   │   ├── resetPassword.ts
│   │   ├── updatePassword.ts
│   ├── /user     # User-related routes (profile, etc.)
│   ├── /config
│   │   ├── supabase.ts    # Supabase client config
│   ├── server.ts          # Main entry file
│── package.json
│── tsconfig.json
│── .env
```

### **Getting Started**
1. Clone the repository
    ```sh
    git clone https://github.com/ebun-amoo/unity-estate-security-bcknd.git
    cd unity-estate-security-bcknd
    ```
1. Install dependencies:
   ```sh
   npm install
   ```
2. Pull environment variables from Vercel:
   ```sh
   npm run pull_env
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

(Endpoints & Features still in progress 🚧)

## 🔗 Useful Links
- [Supabase Docs](https://supabase.com/docs)
- [Express.js Docs](https://expressjs.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---
💡 *Built by [ebun-amoo](https://github.com/ebun-amoo) and [freshpex](https://github.com/freshpex/)*

