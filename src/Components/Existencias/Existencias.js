import React from "react";
import InventarioCard from "./InventarioCard";

const Existencias = ({ cantidadExistencias, inventarioList }) => {

    return(
        <>
            <div className={"contenedor"} id="contenedorHoraFinal">
                <div className="contenedorEncabezado">
                    Existencias ({cantidadExistencias})
                </div>
                <div className={"contenedor"}>
                    <div className='itemservespCont'>
                        {
                            inventarioList.map(compra => 
                                <InventarioCard compra={compra}key={compra.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Existencias