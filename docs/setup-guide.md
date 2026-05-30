# Setup Guide

## Prerequisites

- Node.js (v14+)
- npm
- Python 3 (only needed to regenerate recommendation data)

## Local Installation

1. Install project dependencies:
   - `npm install`
2. Create a `.env` file in the repository root:
   - `REACT_APP_API_KEY=your_tmdb_api_key_here`
3. Start the development server:
   - `npm start`

The app runs at `http://localhost:3000`.

## Build and Test Commands

- Production build: `npm run build`
- Test runner: `npm test`

## Regenerate Recommendation Data (Optional)

1. Move into the ML folder:
   - `cd Recommendation_system`
2. Install Python dependencies:
   - `pip install pandas scikit-learn`
3. Export recommendation JSON:
   - `python export_data.py`
