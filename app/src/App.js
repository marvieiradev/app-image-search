import { useState } from 'react';
import React from 'react';
import './App.css';
import SearchPhotos from './components/SearchPhoto';

function App() {
  return (
    <div className="App">
      <div className='container'></div>
      <h1 className='title'>Photo App</h1>
      <SearchPhotos />
    </div>
  );
}

export default App;
