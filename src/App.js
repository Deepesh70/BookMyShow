import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/play.page';
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
