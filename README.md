<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/TMDB_API-Powered-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-ML-3776AB?style=for-the-badge&logo=python&logoColor=white" />
</p>

# 🎬 Flex-Watch — Movie Booking & Discovery Platform

A responsive, feature-rich movie booking interface inspired by BookMyShow, built with **React 19** and **Tailwind CSS**. Browse trending movies, explore detailed cast & crew info, and receive **ML-powered movie recommendations** — all in a sleek, dark-themed UI.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Home Page** | Hero carousel, trending movies, and entertainment event cards |
| 🎥 **Movie Details** | Full movie info — synopsis, cast, crew, ratings, and more |
| 🎭 **Plays & Events** | Dedicated section for live plays and entertainment events |
| 🤖 **ML Recommendations** | Content-based movie recommendations powered by a Python ML pipeline |
| 📱 **Responsive Design** | Fully responsive across desktop, tablet, and mobile viewports |
| 🌙 **Dark Theme** | Premium dark UI with gold accent colors and smooth animations |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [React Router](https://reactrouter.com/) | 7 | Client-side routing |
| [Axios](https://axios-http.com/) | 1.13 | HTTP client for TMDB API |
| [React Slick](https://react-slick.neostack.com/) | 0.31 | Carousel / slider components |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5 | Icon library |
| [Headless UI](https://headlessui.com/) | 2.2 | Accessible UI primitives |

### Machine Learning
| Technology | Purpose |
|---|---|
| Python 3 | Recommendation script runtime |
| pandas | Data manipulation |
| scikit-learn | Similarity computation (cosine similarity) |

### API
| Service | Purpose |
|---|---|
| [TMDB API](https://www.themoviedb.org/documentation/api) | Movie data, images, cast & crew info |

---

## 🧠 Machine Learning Integration

The project includes a **Content-Based Recommendation System** under `Recommendation_system/`.

### How It Works

1. **`export_data.py`** loads pre-trained pickled data (`movies_dict.pkl` + `similarity.pkl`).
2. For each movie, it computes the **top 5 most similar movies** using a cosine similarity matrix.
3. Results are exported as a static `src/recommendations.json` file consumed by the React frontend.

### Limitations

> [!NOTE]
> - Recommendations only work for movies present in the training dataset (~4,800 movies).
> - Movie title matching is **case-sensitive and exact-match** based.
> - To update recommendations, re-run the Python script after updating the pickle files.

---

## 📁 Project Structure

```
Flex-Watch/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── CategoryFilter/     # Genre / category filtering
│   │   ├── Entertainement/     # Entertainment event cards
│   │   ├── FeaturedMovie/      # Featured movie spotlight
│   │   ├── Footer/             # Site footer
│   │   ├── HeroCarousal/       # Hero banner carousel
│   │   ├── MovieHero/          # Movie detail hero section
│   │   ├── Navbar/             # Navigation bar
│   │   ├── PostSlider/         # Horizontal poster slider
│   │   ├── context/            # React context providers
│   │   └── poster/             # Poster card component
│   ├── layouts/
│   │   ├── Default.layout.jsx  # Default page layout
│   │   └── Movie.layout.jsx    # Movie detail page layout
│   ├── pages/
│   │   ├── Home.page.jsx       # Home page
│   │   ├── Movie.page.jsx      # Movie detail page
│   │   └── play.page.jsx       # Plays & events page
│   ├── recommendations.json    # ML-generated recommendations
│   ├── App.js                  # Root component & routing
│   ├── index.js                # Entry point
│   └── index.css               # Global styles & Tailwind directives
├── Recommendation_system/
│   ├── export_data.py          # ML script to generate recommendations
│   ├── movies_dict.pkl         # Pickled movie dataset
│   └── similarity.pkl          # Pickled cosine similarity matrix
├── tailwind.config.js          # Tailwind theme customization
├── postcss.config.js           # PostCSS configuration
├── package.json
└── .env                        # TMDB API key (not committed)
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [npm](https://www.npmjs.com/)
- [Python 3](https://www.python.org/) *(only if regenerating ML recommendations)*

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Flex-Watch
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the project root:
   ```env
   REACT_APP_API_KEY=your_tmdb_api_key_here
   ```
   > Get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

4. **Start the development server**:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

### Regenerating ML Recommendations *(optional)*

```bash
cd Recommendation_system
pip install pandas scikit-learn
python export_data.py
```

This will regenerate `src/recommendations.json` from the pickle files.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Run the dev server on port 3000 |
| `npm run build` | Create a production build in `build/` |
| `npm test` | Run the test suite |
| `npm run eject` | Eject from Create React App *(irreversible)* |

---

## 🎨 Design System

The app uses a **custom dark theme** defined in `tailwind.config.js`:

- **Dark palette**: Deep navy/charcoal tones (`#050709` → `#718096`)
- **Accent gold**: `#f5c518` with hover/glow states
- **Accent red**: `#e50914` for CTAs
- **Font**: Inter (Google Fonts)
- **Animations**: Fade-in, slide-up, and pulse-glow keyframes

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is for educational and personal use.

---

## 📚 Additional Documentation

Detailed project documentation is available in [`/docs`](./docs/README.md), including setup, architecture, and feature walkthrough guides.

---

<p align="center">
  Made with ❤️ using React & Tailwind CSS
</p>
