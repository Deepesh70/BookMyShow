import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import MovieProvider from './components/context/Movies.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>     { /* wrap your application with BrowserRouter to enables client-side routing for Single Page Applications */ }
    <MovieProvider>
    <App />
    </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);

