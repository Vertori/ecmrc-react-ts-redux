import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import WomensClothing from "./pages/WomensClothing";
import MensClothing from "./pages/MensClothing";
import Jewelery from "./pages/Jewelery";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/women" element={<WomensClothing />} />
          <Route path="/men" element={<MensClothing />} />
          <Route path="/jewelery" element={<Jewelery />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
