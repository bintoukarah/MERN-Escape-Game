import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Pages/NavBar";
import HomePage from "./components/Pages/HomePage";
import Cards from "./components/Pages/Cards";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/SignUp";
import OneRoom from "./components/Pages/OneRoom";
import Booking from "./components/Pages/Booking";
import DashBoard from "./components/Pages/DashBoard";
import NewRoom from "./components/Pages/NewRoom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/rooms/:_id" exact element={<OneRoom />}></Route>
      <Route path="/rooms/:_id/Booking" element={<Booking />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" exact element={<DashBoard />} />
      <Route path="/dashboard/newRoom" element={<NewRoom />} />


    </Routes>
  </BrowserRouter>
);


