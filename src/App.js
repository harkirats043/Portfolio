import logo from './logo.svg';
import './App.css';

//  Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from './pages/Projects';
// console.log(Projects)

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
