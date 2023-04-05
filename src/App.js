import {Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import Home from "./Pages/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
