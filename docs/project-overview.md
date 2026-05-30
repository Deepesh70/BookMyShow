# Project Overview

## What Flex-Watch Is

Flex-Watch is a React-based movie discovery and booking-style platform inspired by BookMyShow.  
It combines UI-focused browsing flows with a recommendation layer powered by Python-generated data.

## Main Goals

- Provide a modern and responsive movie browsing experience
- Surface rich movie details from TMDB
- Offer recommendation support through a precomputed similarity dataset
- Keep the UI modular with reusable React components

## Core Technology

- **Frontend:** React 19, React Router, Tailwind CSS
- **Data/API:** TMDB API via Axios
- **Recommendations:** Python scripts exporting JSON data for frontend usage

## Primary User Flow

1. Browse content from the homepage sliders and cards
2. Open a movie detail page for cast, overview, and ratings context
3. View related/recommended titles where available
4. Explore plays/events in the dedicated section
