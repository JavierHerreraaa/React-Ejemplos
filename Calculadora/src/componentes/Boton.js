import React from 'react';
import '../stylesheets/Boton.css'
function Boton(props){

  function esOperador(){ //Importante poner las llaves al parámetro pasado a la función
    return isNaN(props.numero) && props.numero !== "." && props.numero !== '=';
  }

  return (
    <div
      className={`boton-contenedor ${esOperador() ? 'operador' : null}`.trimEnd()}
      onClick= { ()=> props.manejarClic(props.numero)}>
      { props.numero }
    </div>
  );
}

export default Boton;