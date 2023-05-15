import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Navbar from './component/navbar/navbar';
import {Routes,Route} from "react-router-dom";
import Login from './pages/login/login';
import Add from './pages/add/add';
import Bergidarlar from './pages/bergidarlar/bergidarlar';
import Borchlylar from './pages/borchlylar/borchlylar';
import Arhiw from './pages/arhiw/arhiw';
import Exel from './pages/exel/exel';
import Chart from './pages/chart/chart';

function App() {
  return (
    <div className="App">
      <header>
             <Navbar/>
      </header>
      <Routes>   
            <Route path="/" element={ <Login/> } />    
            <Route path="/home" element={ <Home/> } /> 
            <Route path="/add" element={ <Add/> } /> 
            <Route path="/borchlylar" element={ <Borchlylar/> } /> 
            <Route path="/bergidarlar" element={ <Bergidarlar/> } /> 
            <Route path="/chart" element={ <Chart/> } /> 
            <Route path="/exel" element={ <Exel/> } /> 
            <Route path="/arhiw" element={ <Arhiw/> } /> 
      </Routes>   
    </div>
  );
}

export default App;
