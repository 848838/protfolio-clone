
import Navbar from './Navbar';
import Start from './Start';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Works from './Works';
import Home from './Home';
import './App.css'
import { Search } from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>



      <BrowserRouter>
        <Navbar  />
        <Routes>

          <Route path='/' element={<Home title="Start" />} />
          <Route path='/Home'  element={<Home title="Home" />} />
          <Route path='/Work' element={<Works/>} />
          <Route path='/Contact' element={<Contact title="conatact" />} />

        </Routes>


      </BrowserRouter>




    </>
  );
}

export default App;
