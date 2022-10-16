import './App.css';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //Paquete mathjs

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }

  const borrarTodo = () => {
    setInput('');
  }

  const calcularResultado = () => {
    if(input.length > 0)
      setInput(evaluate(input));
  }

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input= {input} />
        
        <div className='fila'>
          <Boton numero='1' manejarClic={agregarInput} />
          <Boton numero='2' manejarClic={agregarInput}/>
          <Boton numero='3' manejarClic={agregarInput}/>
          <Boton numero='+' manejarClic={agregarInput}/>
        </div>
        <div className='fila'>
          <Boton numero='4' manejarClic={agregarInput}/>
          <Boton numero='5' manejarClic={agregarInput}/>
          <Boton numero='6' manejarClic={agregarInput}/>
          <Boton numero='-' manejarClic={agregarInput}/>
        </div>
        <div className='fila'>
          <Boton numero='7' manejarClic={agregarInput}/>
          <Boton numero='8' manejarClic={agregarInput}/>
          <Boton numero='9' manejarClic={agregarInput}/>
          <Boton numero='*' manejarClic={agregarInput}/>
        </div>
        <div className='fila'>
          <Boton numero='=' manejarClic={calcularResultado}/>
          <Boton numero='0' manejarClic={agregarInput}/>
          <Boton numero='.' manejarClic={agregarInput}/>
          <Boton numero='/' manejarClic={agregarInput}/>
        </div>
        <div className='fila'>
          <BotonClear nombre="Borrar Todo" manejarClic={borrarTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
