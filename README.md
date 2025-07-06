# 🧠 Ai College Buddy – Your Personal College Study Mentor

A smart AI-powered MERN stack application that helps students generate personalized **study plans**, **learning strategies**, **motivation**, and **YouTube video recommendations** based on their academic struggles — all powered by **Google Gemini AI**.

---

## 🚀 Live Demo

*Coming soon...*

---

## 🛠️ Tech Stack

### Frontend: React.js

* `ReactMarkdown` – for rendering AI output in markdown format
* `axios` – for frontend-backend communication
* `html2pdf.js` + `jsPDF` – to export AI responses as styled PDFs
* Responsive, clean design with custom CSS3

### Backend: Node.js + Express.js

* REST API to handle Gemini prompt requests
* Modular MVC structure (controllers, services, errors)
* Secure API access with `.env` variables

### AI: Google Gemini (Free Tier)

* API: `gemini-2.0-flash`
* Responds in structured markdown format
* Prompt-engineered for educational use-case

---

## 📦 Features

* 🧑‍🎓 Input your academic struggle or need
* 🤖 AI generates a tailored response
* ✅ Sections: Study Plan, Strategies, Motivation, YouTube Links
* 📄 Download response as a stylized PDF
* ⚠️ Handles API errors, invalid input gracefully


---

## 💡 Web Development Concepts Demonstrated

| Concept            | Usage                                  |
| ------------------ | -------------------------------------- |
| MERN Stack         | Full-stack architecture                |
| REST API           | `POST /ask/gemini/get-response`        |
| Prompt Engineering | Detailed system + user prompt layering |
| Error Handling     | Custom error class + status codes      |
| Markdown Parsing   | With `react-markdown`                  |
| PDF Generation     | Using `html2pdf.js` + `jsPDF`          |
| React Hooks        | `useState`, `useRef`                   |
| Form Handling      | Controlled textarea input              |
| Responsive UI      | CSS media queries + clean layout       |

---

## 👨‍💻 Made with ❤️ by Ashay Patil

> "Sometimes all you need is the right plan, the right mindset, and a little AI to keep you going. Keep Studying !!"
