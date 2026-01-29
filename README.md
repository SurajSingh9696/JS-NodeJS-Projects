# DHTML-NodeJS Projects

A collection of modern, full-stack web applications built with JavaScript, Node.js, and MongoDB, featuring beautiful, responsive UIs with dark mode support.

## 🚀 Projects

### 1. QR Code Generator
Generate QR codes from any text instantly with a sleek, modern interface.

**Features:**
- Real-time QR code generation
- Modern gradient UI with smooth animations
- Dark/Light theme toggle
- Fully responsive design
- Mobile-first approach

**Port:** `3500`

### 2. ToDo List
A powerful task management application with an intuitive interface for staying organized.

**Features:**
- Create, view, and delete tasks
- Persistent storage with MongoDB
- Modern card-based UI
- Theme toggle (Dark/Light mode)
- Empty state handling
- Smooth animations and transitions
- Mobile-optimized layout

**Port:** `3800`

### 3. URL Shortener
Create custom short URLs with an elegant, user-friendly interface.

**Features:**
- Custom short URL creation
- URL validation
- Visual URL prefix display
- Modern gradient design
- Dark/Light theme support
- Responsive and mobile-friendly
- Animated result display

**Port:** `4000`

## 🎨 UI Features

All projects include:
- **Modern Design**: Gradient headers, smooth shadows, and rounded corners
- **Dark Mode**: System-persistent theme toggle
- **Animations**: Fade-ins, slide-ins, scale effects, and hover transitions
- **Typography**: Poppins and Space Grotesk font combinations
- **Responsive**: Mobile-first approach with breakpoints at 480px and 768px
- **Interactive**: Smooth hover effects and button animations
- **Accessible**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Custom Properties, Animations, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins, Space Grotesk)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or cloud instance)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd DHTML-NodeJS
```

2. Install dependencies for each project:
```bash
cd "QR Code Gnerator"
npm install

cd "../ToDo List"
npm install

cd "../URL Shortner"
npm install
```

3. Make sure MongoDB is running on your system.

## 🚀 Running the Projects

### QR Code Generator
```bash
cd "QR Code Gnerator"
npm start
```
Open `qrcode.html` in your browser and the server will run on `http://localhost:3500`

### ToDo List
```bash
cd "ToDo List"
npm start
```
Open `indextodo.html` in your browser and the server will run on `http://localhost:3800`

### URL Shortener
```bash
cd "URL Shortner"
npm start
```
Open `urlshortner.html` in your browser and the server will run on `http://localhost:4000`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Project Structure

```
DHTML-NodeJS/
├── QR Code Gnerator/
│   ├── index.js          # Backend server
│   ├── qrcode.html       # Frontend UI
│   ├── qrcode.css        # Styles
│   ├── qrcode2.js        # Frontend logic
│   └── package.json
├── ToDo List/
│   ├── index.js          # Backend server
│   ├── indextodo.html    # Frontend UI
│   ├── todospecial.css   # Styles
│   ├── todo.js           # Frontend logic
│   └── package.json
├── URL Shortner/
│   ├── index.js          # Backend server
│   ├── urlshortner.html  # Frontend UI
│   ├── urlstyle.css      # Styles
│   ├── url.js            # Frontend logic
│   └── package.json
└── README.md
```

## ✨ Features Highlights

- **Persistent Theme**: User's theme preference saved in localStorage
- **Error Handling**: User-friendly error messages and validation
- **Keyboard Support**: Enter key functionality for form submissions
- **Loading States**: Visual feedback for async operations
- **Empty States**: Helpful messages when no data exists
- **Animations**: Smooth transitions and micro-interactions throughout

## 👨‍💻 Author

**Suraj Singh**
- GitHub: [@SurajSingh9696](https://github.com/SurajSingh9696)

## 📝 License

This project is open source and available for educational purposes.

---

Made with ❤️ by Suraj Singh
