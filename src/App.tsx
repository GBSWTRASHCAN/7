import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import path from 'path';
import MainWeb from './main/MainWeb';
import Boast from './boast/Boast';
import Introduce from './introduce/Introduce';
import FeatureProgram from './FeatureProgram/FeatureProgram';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainWeb />} path='/'/>
      <Route element={<Boast />} path='/Boast'/>
      <Route element={<Introduce />} path='/Introduce'/>
      <Route element={<FeatureProgram />} path='/Feature'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
