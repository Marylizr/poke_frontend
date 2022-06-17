import styles from './app.module.css'
import Home from './pages/home/home';
import {  Route, Routes } from 'react-router-dom';
import React from 'react';
import Favs from './pages/favs/favs';
import Register from './pages/register/Register';
import Login from './pages/login/login';
import { useState } from 'react';


import SecuredContent from './pages/securedContent/securedContent';

function App() {
  
  const [searchValue, setSearchValue] = useState('');
  

  return (
    <div className={styles.container}>
     
      <div className={styles.content}>
          <Routes>
              <Route path="/" element={<Home searchValue={searchValue} onSearch={setSearchValue}/>} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/users" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/securedcontent/*" element={<SecuredContent />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
