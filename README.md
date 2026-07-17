# 📚 BROKIER — Book Recommendation System

A premium, portfolio-worthy **Book Recommendation System** web application built with **Flask** and **Bootstrap 5**. Features an elegant, reading-inspired design with warm brown and gold aesthetics, smooth animations, and a fully responsive layout.

---

## ✨ Features

- **Top 50 Books** — Browse the most popular and highest-rated books curated from reader data
- **Personalized Recommendations** — Search for a book and get tailored suggestions (ML-powered)
- **Premium UI** — Warm, library-inspired color palette with glassmorphism, floating particles, and elegant typography
- **Responsive Design** — Seamlessly adapts to desktop, tablet, and mobile screens
- **Smooth Animations** — Fade-in sections, hover effects, and floating particle background
- **Clean Architecture** — Modular Flask templates with proper inheritance

---

## 📸 Screenshots

> _Add screenshots here after running the application._

| Home Page | Recommend Page | About Page |
|:---------:|:--------------:|:----------:|
| ![Home](#) | ![Recommend](#) | ![About](#) |

---

## 📁 Folder Structure

```
brokier/
│
├── app.py                  # Flask application (routes)
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation
├── popular.pkl             # Pickled popularity model data
├── intro.txt               # Personal learning notes
│
├── model/                  # ML model files (your models go here)
│
├── static/
│   ├── css/
│   │   └── style.css       # Custom stylesheet
│   └── js/
│       └── main.js         # Navbar scroll, particles, animations
│
└── templates/
    ├── base.html            # Reusable base layout
    ├── index.html           # Home page (Top 50 books)
    ├── recommend.html       # Recommendation search & results
    └── about.html           # About, features, contact
```

---

## 🚀 Installation & Setup

### Prerequisites

- Python 3.8+
- pip

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/brokier.git
   cd brokier
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate     # Linux/Mac
   venv\Scripts\activate        # Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask app**
   ```bash
   python app.py
   ```

5. **Open in browser**
   ```
   http://127.0.0.1:5000
   ```

---

## 🛠 Technologies Used

| Category   | Technology             |
|:-----------|:-----------------------|
| Backend    | Python, Flask          |
| Frontend   | HTML5, Bootstrap 5     |
| Styling    | CSS3, Google Fonts     |
| JavaScript | Vanilla JS (minimal)  |
| ML (Model) | Pandas, Scikit-learn   |
| Icons      | Bootstrap Icons        |

---

## 🔮 Future Scope

- [ ] Add user authentication and reading lists
- [ ] Implement book detail pages with reviews
- [ ] Add genre-based filtering and search
- [ ] Deploy on cloud (AWS / Heroku / Render)
- [ ] Add dark/light mode toggle

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Paridhi Jain**

- GitHub: [github.com/ParidhiiJ8](https://github.com/ParidhiiJ8)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

> _Built with ❤️ for book lovers everywhere._
