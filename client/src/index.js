import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Pages/NavBar";
import HomePage from "./components/Pages/HomePage";
import Cards from "./components/Pages/Cards";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/SignUp";
import OneRoom from "./components/Pages/OneRoom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/rooms/:_id" element={<OneRoom />}>
      </Route>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

    </Routes>
  </BrowserRouter>
);


