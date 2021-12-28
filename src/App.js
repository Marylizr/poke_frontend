import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import React from 'react';
import Favs from './pages/favs/favs';
import Details from './pages/details/details';


function App() {
  const [favCards, setFavCards]  = useState([]);

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs favCards={favCards} />} />
          <Route path=":url" element={<Details />} />
      </Routes>
        
    </div>
  );
}

export default App;
