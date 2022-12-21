import "./App.scss";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import DetailsMoviePage from "./components/movie-sections/DetailsMoviePage";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Login />} />
            <Route path="/disney-home" element={<Home />} />
            {/* <Route path="/disney/detail/:id" element={<DetailsMoviePage />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
