# 🌐 Sfoures Website

Official website for **sfoures.com** — a modern web platform built with a **React (Vite) frontend** and a **Node.js backend**, focused on performance, scalability, and clean architecture.

---

## 🚀 About the Project

Sfoures is designed to deliver fast, scalable, and user-friendly digital experiences.
It follows a decoupled architecture with a frontend SPA and a backend API.

---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React (Vite)
* JavaScript / TypeScript
* CSS / Tailwind / SCSS

### Backend

* 🟢 Node.js
* Express.js (or your framework)
* REST APIs

### Database

* MongoDB / MySQL / PostgreSQL (update as per your setup)

---

## 📁 Project Structure

```bash
frontend/        # React + Vite application
backend/         # Node.js API server
public/          # Static assets
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone git@github.com:your-username/your-repo.git
cd your-repo
```

---

## 🧩 Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔧 Backend Setup (Node.js)

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## 🔗 Environment Variables

Create `.env` files in both `frontend` and `backend`.

### Backend `.env`

```
PORT=5000
DB_URI=your_database_connection
JWT_SECRET=your_secret_key
```

### Frontend `.env`

```
VITE_API_URL=http://localhost:5000
```

---

## 🌍 Deployment

### Frontend

```bash
npm run build
```

Deploy `/dist` folder to hosting (Nginx, Vercel, etc.)

### Backend

* Deploy on VPS / Docker / cloud (AWS, DigitalOcean, etc.)
* Use process manager like PM2

---

## 📸 Features

* ⚡ Fast SPA using Vite
* 🔌 REST API architecture
* 🔐 Authentication support
* 📱 Fully responsive UI
* 🚀 Production-ready build

---

## 🔄 API Integration

Frontend communicates with backend via:

```
VITE_API_URL
```

Ensure CORS is properly configured on backend.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT License

---

## 📬 Contact

* 🌐 Website: https://sfoures.com
* 📧 Email: [support@sfoures.com](mailto:support@sfoures.com)

---

## ⭐ Acknowledgements

Thanks to all contributors and open-source tools used in this project.
