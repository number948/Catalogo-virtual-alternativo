import React from "react";
import App from "../App";



interface ObjetoProps {
   image: string;
   nombre: string;
   localidad :string;
   uso :string;

}

function Objeto (props: ObjetoProps)   {
  return (
    <div className='contenedor-objeto'>
      <img
        className="imagen-objeto"
        src = {props.image}
        alt= 'imagen-bombero'/>
      
      <div className='contenedor-descripcion-objeto'>
        <p className='nombre-objeto'>{props.nombre}</p>
        <p className='localidad-objeto'>{props.localidad}</p>
        <p className='uso-objeto'>{props.uso}</p>
        </div>   
    </div>
  );
};

export default Objeto;