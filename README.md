# 🌐 Linguist Pro - AI Translator

English to Spanish translation web application powered by artificial intelligence, using the Llama 3 model via the Groq API.

## 🛠️ Technologies

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-8A2BE2?logo=CSS&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=grey)
![API](https://img.shields.io/badge/API-grey)
![Static Badge](https://img.shields.io/badge/IA-1572B6)

## 🚀 Features

- Easy-to-use translator similar to Google Translate
- Minimalist interface
- Spanish to English exchange
- Translator with integrated AI Groq API

## 📚 What I learned

- How to integrate a third-party AI API (Groq) using `fetch` and `async/await`
- How to protect API credentials using a **Vercel Serverless Function**, keeping the key server-side and never exposed in the browser
- How to implement a **debounce** pattern to optimize API usage
- How to deploy a frontend project with environment variables on Vercel

## 💡 Future improvements
- Add search functionality  
- Add favorites system  
- Improve UI and visual design

## 🔗 Live Demo

👉 [Linguist Pro](https://linguist-pro-kohl.vercel.app/)

## 📸 Preview

![App Preview](./img/preview-linguist-pro.gif)

## 🖥️ Local Setup

### Option 1 – Deploy (recommended)
- Fork the repository
- Import it into [vercel.com](https://vercel.com)
- Add your `GROQ_API_KEY` as an environment variable
- Deploy

### Option 2 – Run locally
- Clone the repository
- Add your API key in [console.groq.com](https://console.groq.com) (it's free)
- Run the project using Live Server

> ⚠️ Never commit your API key to a public repository
