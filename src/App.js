import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Navbar from './component/navbar/navbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Login from './pages/login/login';
import Add from './pages/add/add';
import Bergidarlar from './pages/bergidarlar/bergidarlar';
import Borchlylar from './pages/borchlylar/borchlylar';
import Arhiw from './pages/arhiw/arhiw';
import Exel from './pages/exel/exel';
import Chart from './pages/chart/chart';
import Error from './pages/error/error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Error />} />
          <Route element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
          >
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/borchlylar" element={<Borchlylar />} />
            <Route path="/bergidarlar" element={<Bergidarlar />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/exel" element={<Exel />} />
            <Route path="/arhiw" element={<Arhiw />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
