import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ColorText from './components/ColorText';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:param" element={<ColorText />} />
          <Route path="/:param/:color1/:color2" element={<ColorText />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
