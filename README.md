# 👗 ReWear – Sustainable Fashion Exchange Platform

**ReWear** is a web-based platform built to encourage the reuse and exchange of fashion items to reduce textile waste and promote sustainable shopping.

## 🌿 Vision
Empower individuals to **swap clothing**, **earn points**, and **build a community** focused on eco-conscious fashion.

---

## 🚀 Features

- ✨ Modern, responsive frontend using HTML, CSS, and JavaScript  
- 🔐 Login / Sign-Up system with animated forms (name, email, password)  
- 📱 Mobile-first, fully responsive UI with glassmorphism aesthetics  
- 🧑‍💻 Dashboard to view profile, uploaded items, and points  
- 🛍️ Browse section with real-time item previews  
- ➕ Add-item page with upload form and validation  
- 🔄 Swap simulation system for future integration  
- 🔧 Backend-ready for future authentication and database linking

---

## 📁 Project Structure
ReWear/
├── index.html # Landing page (Login/Signup gateway)
├── login.html # User login page
├── register.html # User registration page
├── dashboard.html # Logged-in user profile & points
├── browse.html # Fashion items available for swapping
├── add-item.html # Form to upload new clothing items
├── style.css # Shared styling (glassmorphism, layout, responsive)
└── script.js # Login/signup logic + redirect simulation

---

## ⚙️ How It Works (Frontend Only)

- `index.html` shows **Login** / **Sign-Up** options.
- On successful login/signup, user is redirected to `dashboard.html`.
- Navigation bar links all major pages: dashboard, browse, add item.
- Frontend simulates functionality for now; backend can be added later.

---

## 🛠️ Backend Support (Planned)

Backend API will support:
- Secure auth (JWT)
- User storage (MongoDB)
- Item uploads
- Swap history and admin control

---

## 📷 Thumbnail

![ReWear Thumbnail](./thumbnail.png)

> Replace this with your own screenshot or the thumbnail image

---

## 🙌 Built With

- HTML5, CSS3 (Flexbox, Grid, Animations)
- JavaScript (Vanilla)
- Node.js + Express (for backend)
- MongoDB (via Mongoose)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

