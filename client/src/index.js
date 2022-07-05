import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Rooms from "./components/Rooms";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
 <Routes>
  <Route path="/" element={<NavBar />} />
  <Route path="/Cards" element={<Cards />} />
  <Route path="/Rooms" element={<Rooms />} />
 </Routes>
</BrowserRouter>
);

