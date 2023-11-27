import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import path from 'path';
import MainWeb from './main/MainWeb';
import Boast from './boast/Boast';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainWeb />} path='/'/>
      <Route element={<Boast />} path='/Boast'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
