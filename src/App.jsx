import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Login from "./pages/login";
import Signin from "./pages/signin";
import Ex from "./pages/ex";

function App() {
  return (
    <Routes> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signin" element={<Signin />} /> 
      <Route path="/ex" element={<Ex />} /> 
    </Routes>
  );
}

export default App;