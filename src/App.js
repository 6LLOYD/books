import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddBooks from "./containers/AddBooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./containers/SearchBooks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBooks />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
