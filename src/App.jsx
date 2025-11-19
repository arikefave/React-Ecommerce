import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Catalogpage from "./pages/Catalogpage";
import Product_Detail from "./pages/Product_Detail";
import Product_Inner_Page from "./pages/Product_Inner_Page";
import { ProductsProvider } from "./context/ProductsContext";
import Authpage from "./pages/Authpage";
import ShoppingCartpage from "./pages/ShoppingCartpage";
import Dashboardpage from "./pages/Dashboardpage";
import Checkout_Shipping_Page from "./pages/Checkout_Shipping_Page";
import Checkout_Payment_Page from "./pages/Checkout_Payment_Page";
import Checkout_Dashboard_Page from "./pages/Checkout_Dashboard_Page";

const App = () => {
  return (
    <div className="font-f_poppins overflow-x-hidden">
      <Router>
        <ProductsProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/catalog" element={<Catalogpage />} />
            <Route path="/product/:id" element={<Product_Detail />} />
            <Route path="/productInnerPage" element={<Product_Inner_Page />} />
            <Route path="/authpage" element={<Authpage />} />
            <Route path="/mycart" element={<ShoppingCartpage />} />
            <Route path="/dashboard" element={<Dashboardpage />} />
            <Route
              path="/shippingdetails"
              element={<Checkout_Shipping_Page />}
            />
            <Route path="/payment" element={<Checkout_Payment_Page />} />
            <Route path="/checkout" element={<Checkout_Dashboard_Page />} />
          </Routes>
          <Footer />
        </ProductsProvider>
      </Router>
    </div>
  );
};

export default App;
