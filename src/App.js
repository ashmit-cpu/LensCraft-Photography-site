import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/gallery" element={<Gallery />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
