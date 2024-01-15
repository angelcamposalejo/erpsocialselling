import React, { useEffect, useState } from "react";
import CajaTable from "./CajaTable";

const Caja = ({ cajaList }) => {

    const [isRegistro,setIsRegistro] = useState(false)
    const [tipo, setTipo] =useState(true)

    const handleRegistrarEntradaClick = () => (event) => {
        event.preventDefault()
        setIsRegistro(true)
        setTipo(true)
    }

    const handleRegistrarSalidaClick = () => (event) => {
        event.preventDefault()
        setIsRegistro(true)
        setTipo(false)
    }

    return(
        <>
            <div className={"contenedor"} id="contenedorHoraFinal">
                <div className="contenedorEncabezado">
                    Caja
                </div>
                {
                    isRegistro
                        ?
                            null
                        :
                            <>
                                <div className="wrapper">
                                    <button onClick={handleRegistrarEntradaClick()}>
                                        Registrar Entrada
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <button onClick={handleRegistrarSalidaClick()}>
                                        Registrar Salida
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <CajaTable cajaList={cajaList}/>
                            </>

                }
            </div>
        </>
        
    )
}

export default Caja