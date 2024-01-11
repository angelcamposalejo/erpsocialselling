import React, { useState } from 'react'
import './App.css';
import './Styles/Button.css'
import './Styles/Select.css'; 
import './Styles/Card.css'

import Compras from './Components/Compras/Compras';
import Menu from './Components/Menu';

const App = () => {

  const [isCompras, setIsCompras] = useState(true)
  const [isExistencias, setIsExistencias] = useState(true)

  return(
    <>
      <Menu setIsCompras={setIsCompras} isCompras={isCompras}
        setIsExistencias={setIsExistencias} isExistencias={isExistencias}/>
      {
        isCompras
          ?
            <Compras />
          :
            null
      }
      {/* <img src={process.env.PUBLIC_URL + "/imagenes/" + "uno.jpg"} alt="bandera" /> */}
    </>
  )
}
export default App;
