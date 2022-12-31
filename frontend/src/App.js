import { useEffect, useState } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import Selectores from './components/Selectores';
import BotonCalcular from './components/BotonCalcular';
import Resultados from './components/Resultados';
import axios from 'axios';

function App() {

  const [calculado, setCalculado] = useState(false);
  const [selectores, setSelectores] = useState(false);
  const [parametros, setParametros] = useState([]);
  const [pred, setPred] = useState(null);
  const [calcular, setCalcular] = useState(0);



  function handleSelectores(select){
    setSelectores(select);
  }

  function handleCalcular(){
    setCalculado(true);
    setCalcular(calcular + 1);
  }

  // Necesaria esta extension en Chrome: Allow CORS: Access-Control-Allow-Origin
  const getPrediccion = async () => {
      try {
          axios.get(`http://127.0.0.1:8000/predict?local=${parametros[0]}&visitante=${parametros[1]}&arbitro=${parametros[2]}`)
          .then(res => {
            setPred(res.data);
          })
      } catch(err) {
          console.log(err); 
      }
  }


  function handleLambda(l1, l2, l3){
    setParametros([l1, l2, l3]);
  }

  useEffect(() => {
    getPrediccion();
  }, [calcular])
  


  return (
    <div className="App">
      <Titulo />
      <Selectores handleSelectores = {handleSelectores} handleLambda = {handleLambda}/>
      <BotonCalcular handleCalcular = {handleCalcular}/>
      {calculado && selectores ? <Resultados parametros = {parametros} pred = {pred}/> : null}
    </div>  
  );
}

export default App;
