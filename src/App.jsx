import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Profile from "./pages/Profile/UserProfile";

function App() {
  return (
    <div className="text-white bg-[#1f2937d6] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
