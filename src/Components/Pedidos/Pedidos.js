import React from "react";
import PedidoCard from "./PedidoCard";

const Pedidos = ({ cantidadPedidos, inventarioList }) => {

    return(
        <>
            <div className={"contenedor"} id="contenedorHoraFinal">
                <div className="contenedorEncabezado">
                    Pedidos ({cantidadPedidos})
                </div>
                <div className={"contenedor"}>
                    <div className='itemservespCont'>
                        {
                            inventarioList.map(compra => 
                                <PedidoCard compra={compra}key={compra.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pedidos