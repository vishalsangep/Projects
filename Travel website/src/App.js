import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Service/>} path="/service"/>
        <Route element={<Contact/>} path="/contact"/>
      </Routes>
      <Footer/>     
      
      

      
      
     
    </div>
  );
}

export default App;
