import React from "react";
import '../stylesheets/BotonClear.css'

function BotonClear(props){
  return(
    <div 
      className="boton-clear"
      onClick = { () => props.manejarClic()}>
      {props.nombre}
    </div>
  );
}

export default BotonClear;