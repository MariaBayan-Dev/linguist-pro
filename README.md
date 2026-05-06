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

<img width="1887" height="912" alt="ezgif-18a9d3340a94f46d" src="https://github.com/user-attachments/assets/6021c652-6546-46f0-83b2-1167ed12bf07" />


## 🖥️ Local Setup

**Option A - Deploy on Vercel (recommended):**
1. Fork this repository
2. Import it on [vercel.com](https://vercel.com)
3. Add your Groq API key as an environment variable named `GROQ_API_KEY`
4. Deploy — Vercel handles the rest

**Option B - Run locally with Live Server:**
1. Clone this repository
2. Get a free API key at [console.groq.com](https://console.groq.com)
3. In `main.js`, replace the `/api/translate` fetch with a direct call 
   to Groq and add your API key (see comments in the code)
4. Open `index.html` with Live Server

> ⚠️ Never commit your API key to a public repository
