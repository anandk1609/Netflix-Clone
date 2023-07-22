import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/browse" element={<Home/>} />
        <Route exact path="/" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};