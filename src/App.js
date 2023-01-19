import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Splash from './Pages/Splash'
import Home from './Pages/Home'
import Intro from './Pages/Intro'
import Genres from './Pages/Genres'
import MovieDetails from './Pages/MovieDetails'

function App() {

  return (
    <section className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Splash />} />

          <Route path="/intro" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movieDetail" element={<MovieDetails />} />

        </Routes>
      </BrowserRouter>



    </section>
  );
}




export default App;
