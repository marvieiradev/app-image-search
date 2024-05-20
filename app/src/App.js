import React from 'react';
import './App.css';
import SearchPhotos from './components/SearchPhoto';

function App() {
  return (
    <div className="App">
      <div className='container'></div>
      <div className='title'>Photo App</div>
      <SearchPhotos />
    </div>
  );
}

export default App;
