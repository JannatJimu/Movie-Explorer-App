# 🎬 MovieExplorer

MovieExplorer is a responsive React-based movie and TV show discovery application. Users can browse shows, search for specific titles, and view detailed information through an interactive modal.

## 🔗 Live Demo

<p>
  <a href="https://cozy-sable-7f90db.netlify.app" target="_blank">
    <strong>🚀 View Live Project</strong>
  </a>
</p>

---

## ✨ Features

* Responsive navigation bar
* Mobile-friendly sidebar menu
* Home page with hero banner
* Browse movies and TV shows
* Search shows by title
* Responsive movie/show card grid
* Movie/show rating and release information
* Interactive details modal
* Loading state
* Error handling
* No search results state
* Responsive design for mobile, tablet, and desktop

---

## 🛠️ Technologies Used

* JavaScript
* React
* React Router
* Tailwind CSS
* TVMaze API
* HTML5
* CSS3

---

## 🌐 API

This project uses the **TVMaze API** to retrieve movie/show information.

### Get all shows

```text
https://api.tvmaze.com/shows
```

### Search shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

---

## 📁 Project Structure

```text
src/
│
├── component/
│   ├── Header/
│   │   └── header.jsx
│   │
│   ├── Footer/
│   │   └── Footer.jsx
│   │
│   ├── MovieCard/
│   │   └── MovieCard.jsx
│   │
│   └── MovieDetailsModal/
│       └── MovieDetailsModal.jsx
│
├── layout/
│   └── HomeLayout.jsx
│
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   │
│   └── Movies/
│       └── Movies.jsx
│
├── routes/
│   └── routes.jsx
│
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2. Go to the project directory

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

---

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Mobile

* Single-column movie cards
* Mobile sidebar navigation
* Touch-friendly buttons
* Responsive modal

### Tablet

* Two-column movie grid
* Responsive navigation and spacing

### Desktop

* Three to four-column movie grid
* Full navigation bar
* Optimized content width and spacing

## 👩‍💻 Author

**Jannatul Fardaous Jim**

Frontend Developer

GitHub: `https://github.com/JannatJimu`
