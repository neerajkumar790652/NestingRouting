
import './App.css';
import Home from './Components/Home';
import Technologies from './Components/Technologies';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Error from './Error';
import {Routes,Route, Navigate} from "react-router-dom";
import Html from './Components/Html';
import Css from './Components/Css';
import Javascript from './Components/Javascript';
import React1 from './Components/React1';

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tech" element={<Technologies/>}>
          <Route path="" element={<Navigate to="html"/>}/>
          <Route path="html" element={<Html/>}/>
          <Route path="css" element={<Css/>}/>
          <Route path="javascript" element={<Javascript/>}/>
          <Route path="react" element={<React1/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      
    </div>
  )
}
import { Form } from 'react-router-dom';

export default App
