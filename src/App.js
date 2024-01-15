import React, { useEffect, useState } from 'react'
import './App.css';
import './Styles/Button.css'
import './Styles/Select.css'; 
import './Styles/Card.css'
import './Styles/Menu.css'
import './Styles/Table.css'

import { inventarioStore } from './config';

import Caja from './Components/Caja/Caja';
import Compras from './Components/Compras/Compras';
import Existencias from './Components/Existencias/Existencias';
import Menu from './Components/Menu';
import Pedidos from './Components/Pedidos/Pedidos';
import Ventas from './Components/Ventas/Ventas';

const App = () => {

  const [balance, setBalance] = useState(0)
  const [cajaList, setCajaList] = useState([])
  const [isCaja, setIsCaja] = useState(false)
  const [isCompras, setIsCompras] = useState(false)
  const [isExistencias, setIsExistencias] = useState(true)
  const [isPedido, setIsPedido] = useState(false)
  const [isVentas, setIsVentas] =useState(false)
  

  useEffect(()=>{
    inventarioStore.collection("caja").orderBy("fecha", "desc")
        .onSnapshot(snap => {
            const movimientos = []
            snap.forEach(doc => {
              movimientos.push({ id: doc.id, ...doc.data() })
            })
            setCajaList(movimientos)
        },(error)=>{  
          setCajaList([])
        })
  },[])

  useEffect(()=>{
    if(cajaList){
      if(cajaList.length > 0){
        let entradas = 0
        let salidas = 0
        for(let i=0;i<cajaList.length;i++){
          if(cajaList[i].concepto === "Compra" || cajaList[i].concepto === "Gasolina" || cajaList[i].concepto === "Estacionamiento"){
            salidas = salidas + parseFloat(cajaList[i].cantidad)
          }
          else{
            if(cajaList[i].concepto === "Testing" || cajaList[i].concepto === "Inversion" || cajaList[i].concepto === "Venta"){
              entradas = entradas + parseFloat(cajaList[i].cantidad)
            }
            else{
              console.log(cajaList[i].concepto)
            }
          }
        }
        let totalCaja = entradas - salidas
        setBalance(totalCaja)
      }
      else{
        setBalance(0)
      }
    }
    else{
      setBalance(0)
    }
  },[cajaList])

  return(
    <div className="App">
      <Menu setIsCompras={setIsCompras} isCompras={isCompras} setIsExistencias={setIsExistencias} isExistencias={isExistencias}
      setIsCaja={setIsCaja} isCaja={isCaja} balance={balance} setIsPedido={setIsPedido} isPedido={isPedido}
      setIsVentas={setIsVentas} isVentas={isVentas}/>
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
                      isCaja
                        ?
                          <Caja cajaList={cajaList}/>
                        :
                          isPedido
                            ?
                              <Pedidos />
                            :
                              isVentas
                                ?
                                  <Ventas />
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
