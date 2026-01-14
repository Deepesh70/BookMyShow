# BookMyShow Clone

A responsive movie booking application interface built with React, designed to replicate core features of the popular BookMyShow platform.

## Features

- **Home Page**:Browse a carousel of latest movies and entertainment events.
- **Movie Details**: View detailed information about movies, including cast, crew, and synopsis.
- **Plays**: A dedicated section for browsing plays and live events.
- **ML Recommendations**: Personalized movie recommendations powered by a Python-based Machine Learning model.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.

## Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Carousels**: React Slick
- **ML Model**: Python (pandas, scikit-learn)

## Machine Learning Integration

The project includes a Python-based Content-Based Recommendation System.

- **How it works**: A Python script processes `movies_dict.pkl` and `similarity.pkl` files to generate a static JSON file (`recommendations.json`). The React frontend uses this JSON to display recommendations when a user searches for or views a specific movie.
- **Limitations**:
  - The ML recommendations **only work for specific movies** that exist in the provided dataset.
  - The matching is **sensitive to exact names** (case-sensitive and exact string match) as defined in the dataset.


## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd bookmyshow
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Setup**:
    This project uses the TMDB (The Movie Database) API for fetching movie data. You need to obtain an API key.

    - Create a `.env` file in the root directory.
    - Add your TMDB API Key:
      ```env
      REACT_APP_API_KEY=your_tmdb_api_key_here
      ```

## Usage

**Start the development server**:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

**Build for production**:

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/   # Reusable UI components
├── layouts/      # Layout wrappers (e.g., Default, Movie)
├── pages/        # Page components (Home, Movie, Play)
├── App.js        # Main application component & Routing
└── index.css     # Global styles & Tailwind directives
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.
