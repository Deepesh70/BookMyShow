# Architecture Guide

## High-Level Layout

The repository has two major parts:

- `src/` — React frontend application
- `Recommendation_system/` — Python recommendation export workflow

## Frontend Structure

- `src/components/` contains reusable UI modules (navbar, carousels, footer, posters, filters)
- `src/pages/` defines route-level pages (home, movie details, plays)
- `src/layouts/` contains shared page wrappers
- `src/recommendations.json` stores generated recommendation data used at runtime

## Data and Integration

- TMDB API is used for movie metadata, visuals, and credits
- Axios handles request flow in frontend components/pages
- Recommendation data is consumed from static JSON generated offline

## Styling and UX

- Tailwind CSS provides utility-first styling
- Theme customization and design tokens are managed through `tailwind.config.js`
- Carousel interactions are implemented with React Slick
