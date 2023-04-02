import React, { useEffect, useState } from "react";
import Course from "./Pages/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  const [islogin, setIslogin] = useState(false)
  useEffect(() => {
    const tokeninlocalstorage = localStorage.getItem("token");
    if(tokeninlocalstorage){
      setIslogin(true)
    }
    
  }, [])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={islogin ? <Course/> : <Login />} exact />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
