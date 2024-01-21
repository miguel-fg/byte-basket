import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import SigninPage from "./pages/SigninPage";
import VolunteerPage from "./pages/VolunteerPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { CartProvider } from "./components/cart-context/cartContext";

function App() {
  return (
    <div className="App">
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
