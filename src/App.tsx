import './App.css';
import React, { Component } from 'react';
import { Objeto } from './componentes/objeto';

function App() {
  return (
    <div className="App">
     <div className='contenedor-principal'>
    <h2> Museo virtual </h2>
    <h1>Fundación Cultural y Deportiva de Bomberos de Chile (FCDBCH)</h1>
    
    <Objeto />
     </div>
    </div>
  );
}

export default App;
