import React from "react";
import App from "../App";
import imagenLogoAUsar from '../imagenes/bombero-traje.png';

export const Objeto = () => {
  return (
    <div className='contenedor-objeto'>
      <img
        className="imagen-objeto"
        src = {imagenLogoAUsar}
        alt= 'imagen-traje-bombero'/>
      <div className='contenedor-descripcion-objeto'>
        <p className='nombre-objeto'> Uniforme de Bombero ignífugo </p>
        <p className='localidad-objeto'> Región de Valparaíso</p>
        <p className='uso-objeto'>Vestuario </p>
    
        </div>  
    </div>
  );
};

export default Objeto;