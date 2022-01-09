import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import React from 'react';
import Favs from './pages/favs/favs';
import AddPokeWiki from './pages/addPokeWiki/AddPokeWiki';
import Register from './pages/register/Register';


function App() {
  const [favCards, setFavCards]  = useState([]);

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs favCards={favCards} />} />
          <Route path="/create" element={<AddPokeWiki />} />
          <Route path="/users" element={<Register />} />
      </Routes>
        
    </div>
  );
}

export default App;
