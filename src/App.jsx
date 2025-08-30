import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Catalogpage from "./pages/Catalogpage";
import Product_Detail from "./pages/Product_Detail";
import Product_Inner_Page from "./pages/Product_Inner_Page";

const App = () => {
  return (
    <div className="font-f_poppins overflow-x-hidden">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalogpage />} />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/productInnerPage" element={<Product_Inner_Page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
