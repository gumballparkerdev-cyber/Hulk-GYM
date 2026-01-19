import React from 'react';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
// Importing components for different pages
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Membership from './components/Membership';
import BuyPage from './components/Buypage';

function App() {
  return (
    <>
     
      <BrowserRouter>
       <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/membership' element={<Membership />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
