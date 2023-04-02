import Course from "./Pages/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
 
  

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} exact />

        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
