import React from 'react';
import '../stylesheets/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }) { //Igual que pasarle (props). Sintaxis de desestructurización
    return (
      <button
        className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} //Operador Ternario
        onClick={manejarClic}> 
        {texto}
      </button>
    );
}

export default Boton;