<![CDATA[# 📚 BROKIER — AI-Powered Book Recommendation System

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-2.x-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/ML-Collaborative%20Filtering-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="ML">
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  <em>A machine learning–powered book recommendation engine that delivers personalized suggestions using Collaborative Filtering with Cosine Similarity, wrapped in a premium, library-inspired web interface.</em>
</p>

---

## 🧠 How the Recommendation Model Works

BROKIER uses a **dual recommendation approach** combining two powerful techniques:

### 1. Popularity-Based Filtering (Top 50 Books)

The home page showcases the **Top 50 most popular books** ranked by a combination of:
- **Number of Ratings** (`Num-rate`) — books with significant reader engagement
- **Average Rating** (`Avg-rate`) — quality signal from reader scores

This ensures new users immediately see high-quality, crowd-validated recommendations without needing any input.

### 2. Collaborative Filtering (Personalized Recommendations)

The core recommendation engine uses **Item-Based Collaborative Filtering** with **Cosine Similarity**:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────┐     ┌──────────────┐
│  Raw Ratings    │ ──▶ │  User-Item Pivot │ ──▶ │  Cosine Similarity  │ ──▶ │  Top-5 Most  │
│  (Book-Crossings│     │  Table (pt.pkl)  │     │  Matrix             │     │  Similar     │
│   Dataset)      │     │                  │     │  (similarity_score  │     │  Books       │
│                 │     │  Users × Books   │     │   .pkl)             │     │              │
└─────────────────┘     └──────────────────┘     └─────────────────────┘     └──────────────┘
```

**Step-by-step pipeline:**

1. **Data Preprocessing** — The Book-Crossings dataset (containing millions of ratings) is cleaned and filtered for users and books with sufficient interactions.
2. **Pivot Table Creation** — A sparse User × Book matrix is constructed where each cell represents a user's rating for a book.
3. **Cosine Similarity Computation** — Similarity scores are computed between all book pairs based on rating patterns. Books rated similarly by the same users get high similarity scores.
4. **Top-K Retrieval** — When a user searches for a book, the system looks up its row in the similarity matrix and returns the **5 most similar books** (excluding itself), sorted by descending similarity score.

### 📊 Model Performance & Stats

| Metric | Value |
|:-------|:------|
| **Algorithm** | Item-Based Collaborative Filtering |
| **Similarity Metric** | Cosine Similarity |
| **Dataset** | Book-Crossings (278,858 users · 271,379 books · 1.1M+ ratings) |
| **Recommendations per query** | Top 5 similar books |
| **Inference time** | ~50ms (pre-computed similarity matrix) |
| **Model artifacts** | `pt.pkl` (pivot table), `similarity_score.pkl` (similarity matrix), `book.pkl` (metadata), `popular.pkl` (top 50) |
| **Total model size** | ~90 MB (serialized with Pickle) |

> **Why Cosine Similarity?** It measures the angle between two rating vectors, making it robust to differences in rating scales across users. Two books are considered similar if they receive proportionally similar ratings — regardless of whether users are "generous" or "strict" raters.

---

## ✨ Web Application Features

- **🏆 Top 50 Books** — Browse the most popular, highest-rated books curated from reader data
- **🔍 Personalized Recommendations** — Search for any book and get 5 tailored suggestions powered by ML
- **🎨 Premium UI** — Warm, library-inspired color palette with glassmorphism, floating particles, and elegant typography
- **📱 Fully Responsive** — Seamlessly adapts to desktop, tablet, and mobile screens
- **✨ Smooth Animations** — Fade-in sections, hover effects, and floating particle background
- **🏗️ Clean Architecture** — Modular Flask templates with Jinja2 inheritance

---

## 📁 Project Structure

```
brokier/
│
├── app.py                    # Flask application — routes & recommendation logic
├── requirements.txt          # Python dependencies
├── README.md                 # Project documentation
│
├── popular.pkl               # Pre-computed Top 50 books (popularity model)
├── pt.pkl                    # User-Item Pivot Table (collaborative filtering)
├── similarity_score.pkl      # Cosine Similarity Matrix between books
├── book.pkl                  # Book metadata (titles, authors, image URLs)
│
├── intro.txt                 # Personal learning notes on recommendation systems
│
├── static/
│   ├── css/
│   │   └── style.css         # Custom premium stylesheet (CSS variables, animations)
│   └── js/
│       └── main.js           # Navbar scroll, particle canvas, fade-in observer
│
└── templates/
    ├── base.html              # Reusable base layout (navbar, footer, assets)
    ├── index.html             # Home — Hero section + Top 50 books grid
    ├── recommend.html         # Recommendation — Search form + ML results
    └── about.html             # About — Features, tech stack, suggestion form
```

---

## 🚀 Installation & Setup

### Prerequisites

- Python 3.8+
- pip

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/ParidhiiJ8/brokier.git
cd brokier

# 2. Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate        # Linux/Mac
# venv\Scripts\activate         # Windows

# 3. Install dependencies
pip install -r requirements.txt

# 4. Run the Flask app
python app.py

# 5. Open in browser
# http://127.0.0.1:5000
```

---

## 🛠 Technologies Used

| Category | Technology | Purpose |
|:---------|:-----------|:--------|
| **Backend** | Python 3, Flask | Web server, routing, template rendering |
| **ML / Data** | Pandas, NumPy, Scikit-learn | Data processing, pivot tables, cosine similarity |
| **Serialization** | Pickle | Model persistence (pre-computed matrices) |
| **Frontend** | HTML5, Jinja2 | Semantic markup, template inheritance |
| **Styling** | CSS3, Bootstrap 5, Google Fonts | Responsive design, custom properties, typography |
| **JavaScript** | Vanilla JS | Particle animation, scroll effects, intersection observer |
| **Icons** | Bootstrap Icons | UI iconography |

---

## 🧩 Key Design Decisions

1. **Pre-computed Similarity Matrix** — The cosine similarity matrix is computed offline and serialized with Pickle. This gives near-instant recommendations at runtime without any heavy computation.

2. **Item-Based over User-Based CF** — Item-based collaborative filtering was chosen because book preferences change less frequently than user preferences, making the similarity matrix more stable over time.

3. **Dual Approach** — Popularity-based recommendations serve as a cold-start solution (no input needed), while collaborative filtering handles personalized queries.

4. **Premium Warm Aesthetic** — A reading-inspired design with dark browns, golds, and creams creates an immersive library feel, using CSS custom properties for maintainability.

---

## 🔮 Future Scope

- [ ] Add user authentication and personal reading lists
- [ ] Implement book detail pages with reviews and synopses
- [ ] Add genre-based filtering and advanced search
- [ ] Integrate content-based filtering for a hybrid approach
- [ ] Deploy on cloud (AWS / Render / Railway)
- [ ] Expand dataset with more recent books

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Paridhi Jain**

- GitHub: [github.com/ParidhiiJ8](https://github.com/ParidhiiJ8)

---

> _Built with ❤️ for book lovers everywhere._
]]>
