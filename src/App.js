import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/play.page';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {};
axios.defaults.params["api_key"] = `${API_KEY}`

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage/>}></Route>
      <Route path="/plays" element={<PlayPage/>}></Route>
    </Routes>
  </>);
}

export default App;
