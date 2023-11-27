import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
import Login from "./pages/login";
import Signin from "./pages/signin";

function App() {
  return (
    <Routes> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/signin" element={<Signin />} /> 
    </Routes>
  );
}

export default App;