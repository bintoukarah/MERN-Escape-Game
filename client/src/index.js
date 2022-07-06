import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Pages/NavBar";
import HomePage from "./components/Pages/HomePage";
import Cards from "./components/Pages/Cards";
import Rooms from "./components/Pages/Rooms";
import SignIn from "./components/Pages/SignIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Rooms" element={<Rooms />} />
      <Route path="/SignIn" element={<SignIn />} />

        
      </Routes>
    </BrowserRouter>
);
