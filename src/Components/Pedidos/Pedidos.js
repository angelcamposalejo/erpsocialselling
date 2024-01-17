import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { inventarioStore } from "../../config";
import PedidoCard from "./PedidoCard";

const Pedidos = ({ cantidadPedidos, setCantidadPedidos }) => {

    const [inventarioList, setInventarioList] = useState([])

    useEffect(()=>{
        inventarioStore.collection("pedidos").orderBy("fechaEntrega", "desc")
        .onSnapshot(snap => {
            const inventario = []
            let cantidad = 0
            snap.forEach(doc => {
                let producto = doc.data()
                if(!producto.entregado){
                    cantidad = cantidad + 1
                    inventario.push({ id: doc.id, ...doc.data() })
                }
            })
            console.log(inventario)
            setInventarioList(inventario)
            setCantidadPedidos(cantidad)
        },(error)=>{  
            setInventarioList([])
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
            })
        })
    },[setCantidadPedidos])

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