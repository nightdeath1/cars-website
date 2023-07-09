import React, { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contacts";
import CarProductDetails from "./components/СarItems/CarProductDetails";
import Error from "./pages/Error";
import Modal from "./components/Modal/Modal";
import Reviews from "./pages/Reviews";

function App({}) {
  const [dropState, setDropState] = useState(false);
  const handleCloseDrop = () => setDropState(false);
  const handleOpenDrop = () => setDropState(true);


  return (
    <>
      <Router>
        <Header openDrop={handleOpenDrop} />
        <Navbar />
        <Dropdown showDrop={dropState} closeDrop={handleCloseDrop} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/catalog/:productId" element={<CarProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
