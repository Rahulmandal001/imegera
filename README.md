<h1 align="center">🖼️ imegera — AI Image Generator 🚀</h1>

<p align="center">
  Turn your imagination into visuals in seconds using the power of AI.<br/>
  <b>Built with the MERN stack, Razorpay API, and advanced AI integration.</b>
</p>

---

## 🌟 Overview
**imegera** is an advanced **AI image generator** that converts your text prompts into stunning visuals instantly.  
It’s built to make creativity accessible for everyone — from casual users to creators — offering **free credits**, **secure payment integration**, and a smooth, responsive experience.

This project combines **AI, cloud storage, and payments** into one seamless app — designed for both performance and aesthetics.

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React.js  
- Tailwind CSS  
- Framer Motion (for animations)  
- Axios  
- React Router DOM  
- React Toastify  

### 🧩 Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Bcrypt for password hashing  
- Razorpay API for payments  
- Cloudinary / ClipDrop API for AI image generation  
- dotenv, CORS, and Form-Data  

---

## 💡 Features

✅ **AI-Powered Image Generation** – Generate stunning visuals from text prompts instantly.  
✅ **Free Credit System** – Every user gets **5 free credits** to explore image generation.  
✅ **Payment Gateway Integration** – Recharge credits securely using **Razorpay**.  
✅ **User Authentication** – Secure login/signup using JWT and bcrypt.  
✅ **Image Storage & History** – View your generated images anytime.  
✅ **Fully Responsive UI** – Works beautifully on both desktop and mobile.  
✅ **Smooth Animations** – Powered by Framer Motion for a delightful UX.  
✅ **Optimized Backend APIs** – Built with Express and MongoDB for speed and scalability.

---

## 📸 Preview
![image alt](https://github.com/Rahulmandal001/imegera/blob/89e6e076f465bcc42e6a33da9290f85b86dc8dbf/Screenshot%202025-10-14%20203151.png)
![image alt](https://github.com/Rahulmandal001/imegera/blob/648935c55163e81c1de60c46fa03c85d24d3ad12/Screenshot%202025-10-14%20203237.png)
![image alt](https://github.com/Rahulmandal001/imegera/blob/f878f864faa6155e3b5748a4a759919dcfb36690/Screenshot%202025-10-14%20204708.png)


---

## 🚀 Live Demo

🌐 **Frontend (Vercel):** [Visit frontend](https://imegera.vercel.app)  
⚙️ **Backend (Render):** [Visit backend](https://imegera-server.onrender.com)

---

## 🛠️ Installation & Setup

### 🔧 Backend & Frontend Setup

```bash
# Backend setup
cd server
npm install
npm run server

# Frontend setup
cd ../client
npm install
npm run dev
```


### 🔑 Environment Variables

Create a `.env` file inside your backend folder and add the following:

| Variable            | Description                     |
| ------------------- | ------------------------------- |
| MONGODB_URI         | MongoDB connection string       |
| JWT_SECRET          | Secret key for JWT tokens       |
| CLIPDROP_API        | API key for AI image generation |
| RAZORPAY_KEY_ID     | Razorpay API key ID             |
| RAZORPAY_KEY_SECRET | Razorpay secret key             |
| CURRENCY            | Payment currency (e.g., INR)   |




###🧠 System Architecture

<pre> ```text ┌─────────────┐ │ Frontend │ │ (Vercel) │ └─────┬───────┘ │ ▼ ┌─────────────┐ │ Backend │ │ (Render) │ └─────┬───────┘ ┌─────────┼─────────┐ ▼ ▼ ▼ MongoDB Razorpay ClipDrop ``` </pre>


###🪄 Developer Notes

This project is more than just an AI app — it’s a complete production-grade system integrating:

🔐 Authentication + Payments + AI APIs

⚡ Real-time communication between backend and frontend

💫 Smooth UI animations and credit-based logic

🚀 Built with scalability, security, and speed in mind

✨ My Contributions

Added a free credit system for first-time users

Integrated Razorpay for credit purchases

Enhanced UI/UX with Framer Motion animations

Improved API communication and error handling

Added .env configuration for secure key management

Designed a clean, responsive layout for better accessibility

📬 Connect With Me

👨‍💻 Rahul Mandal

💼 [LinkedIn](https://www.linkedin.com/in/rahul-mandal-4a3a752b3/)

🐙 [GitHub](https://github.com/Rahulmandal001)

📧 [Email](mailto:therahulmandal001@email.com)



<p align="center">🚀 Crafted with ❤️ by <b>Rahul Mandal</b> — turning imagination into visuals with <b>imegera</b>.</p>
