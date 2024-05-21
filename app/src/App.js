import React from 'react';
import './App.css';
import SearchPhotos from './components/SearchPhoto';

function App() {

  return (
    <div className="App">
      <div className='container'></div>
      <h1 className='title'>Photo Search App</h1>
      <SearchPhotos />
    </div>
  );
}

export default App;
