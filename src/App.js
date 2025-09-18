import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DIMS from "./pages/DIMS";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App(){
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category/:slug" element={<CategoryPage/>} />
            <Route path="/dims" element={<DIMS/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}
