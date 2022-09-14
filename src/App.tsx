//import './App.css';
import React, { Component } from 'react';
import Objeto from './componentes/objeto';
import imagen_logo_fundacion from './imagenes/logo-fundación.png'; 
import imagen_logo_bomberos from './imagenes/logo-bomberos.png'; 

import imagen_cubo from './imagenes/bombero-cubo 1.png'
import imagen_esclavina from './imagenes/bombero-esclavina 1.png'
import imagen_casco_2 from './imagenes/bombero-casco-2.png';
import imagen_extintor from './imagenes/bombero-extintor 1.png';





function App ()   {
  return ( 
    <div className="App">
        <div className=' contenedor-titulo'>
          <img className='imagen-logo-bomberos' src= {imagen_logo_bomberos} alt='imagen-logo-bomberos' /> 
          <img className='imagen-logo-fundacion' src= {imagen_logo_fundacion} alt='imagen-logo-fundacion' /> 
          <h1>Fundación Cultural y Deportiva de Bomberos de Chile (FCDBCH)</h1>   
          <h2> Museo virtual</h2>
        </div>
        
            <div className='contenedor-principal'>
                <Objeto 
                  imagen= {imagen_cubo}
                  nombre = 'Cubo'
                  cuerpo_bomberos = 'Cuerpo de Bomberos de Achao'
                  tipologia = 'Herramientas y equipo'
                  siglo='XXI'
                />

                <Objeto
                  imagen= {imagen_esclavina}
                  nombre = 'Esclavina'
                  cuerpo_bomberos = 'Cuerpo de Bomberos de Ancud '
                  tipologia = 'Textil y vestuario'
                  siglo='XXI'
                />

                <Objeto
                  imagen= {imagen_extintor}
                  nombre = 'Extintor'
                  cuerpo_bomberos = 'Cuerpo de Bomberos de Coinco'
                  tipologia = 'Herramientas y equipo'
                  siglo='XX'
                />

                <Objeto
                  imagen= {imagen_casco_2}
                  nombre = 'Casco '
                  cuerpo_bomberos= 'Cuerpo de Bomberos de Coinco'
                  tipologia = 'Textil y vestuario'
                  siglo='XIX'
                />

      </div>
  </div>
  );
 
}

export default App;
