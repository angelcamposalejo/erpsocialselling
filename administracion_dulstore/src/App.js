import React, { useState } from 'react'
import './App.css';
import './Styles/Button.css'
import './Styles/Select.css'; 
import './Styles/Card.css'
import './Styles/Menu.css'

import Compras from './Components/Compras/Compras';
import Menu from './Components/Menu';
import Existencias from './Components/Existencias/Existencias';

const App = () => {

  const [isCompras, setIsCompras] = useState(true)
  const [isExistencias, setIsExistencias] = useState(true)

  return(
    <div className="App">
      <Menu setIsCompras={setIsCompras} isCompras={isCompras} setIsExistencias={setIsExistencias} isExistencias={isExistencias}/>
      <div className='cuerpoPacientes'>
        <section className='seccion_pacientes_pendientes'>
          <div className='itemservespCont'>
            {
              isCompras
                ?
                  <Compras />
                :
                  isExistencias
                    ?
                      <Existencias />
                    :
                      null

            }
          </div>
        </section>
      </div>
    </div>
  )
}
export default App;
