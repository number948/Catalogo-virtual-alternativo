import './App.css';
import React, { Component } from 'react';
import Objeto from './componentes/objeto';
import imagen_logo from './imagenes/logo-fundación.png'; 
import imagen_hacha from './imagenes/bombero-hacha.png';
import imagen_traje from './imagenes/bombero-traje.png';
import imagen_casco from './imagenes/bombero-casco.png';
import imagen_casco_2 from './imagenes/bombero-casco-2.png';

function App ()   {
  return (
    <div className="App">
        <div className=' contenedor-titulo'>
        
            <h1>Fundación Cultural y Deportiva de Bomberos de Chile (FCDBCH)</h1> 
            
            <h2> Museo virtual<img className='imagen-logo-fundacion' src= {imagen_logo} alt='imagen-logo' /> </h2>
            
        </div>
     <div className='contenedor-principal'>
        <Objeto 
            image= {imagen_traje}
            nombre = 'Uniforme Bombero'
            localidad = 'Región del Maule'
            uso = 'Vestuario'
          />

        <Objeto
          image= {imagen_casco}
          nombre = 'Casco de Bombero'
          localidad = 'Región metropolitana'
          uso = 'Vestuario'
        />

        <Objeto
          image= {imagen_hacha}
          nombre = 'Hacha de Bombero'
          localidad = 'Región de Valparaíso'
          uso = 'Herramienta'
        />

        <Objeto
          image= {imagen_casco_2}
          nombre = 'Casco de Bombero'
          localidad = 'Región de Los Lagos'
          uso = 'Vestuario'
        />


        </div>
      </div>
  );
}

export default App;
