import './App.css';
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador.js";
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0); //Cambiar el estado de la variable

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
        <div className='contenedor-principal'>
            <Contador 
              numClics= {numClics} />
            <Boton 
              texto="Clic"
              esBotonDeClic={true}
              manejarClic={manejarClic}/>
            <Boton 
              texto="Reiniciar"
              esBotonDeClic={false}
              manejarClic={reiniciarContador}/>
        </div>
    </div>
  );
}

export default App;
