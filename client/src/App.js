import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import Login from "./components/pages/Login";
//import * as ReactDOM from "react-dom/client";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {CartProvider} from "./components/ContextReducer"
import './App.css';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/createUser" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>

</BrowserRouter>
</CartProvider>
   
  );
}

export default App;
