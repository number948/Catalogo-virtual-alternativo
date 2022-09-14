import React from "react";
import App from "../App";

interface ObjetoProps {
   imagen: string;
   nombre: string;
   cuerpo_bomberos :string;
   tipologia :string;
   siglo: string;

}

function Objeto (props: ObjetoProps)   {
  return (
    <div className='contenedor-objeto'>
        <img
          className="imagen-objeto"
          src = {props.imagen}
          alt= 'imagen-bombero'
        />
      
        <div className='contenedor-descripcion-objeto'>
          <p className='nombre-objeto'>{props.nombre}</p>
          <p className='cuerpo_bomberos-objeto'>{props.cuerpo_bomberos}</p>
          <p className='tipologia-objeto'>{props.tipologia}</p>
          <p className='siglo-objeto'>{props.siglo}</p>
        </div>   
    </div>
  );
};

export default Objeto;