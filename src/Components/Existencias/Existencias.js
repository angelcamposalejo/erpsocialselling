import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { inventarioStore } from "../../config";
import InventarioCard from "./InventarioCard";

const Existencias = ({ cantidadExistencias, setCantidadExistencias }) => {

    const [inventarioList, setInventarioList] = useState([])

    useEffect(()=>{
        inventarioStore.collection("inventario").orderBy("fechaCompra", "desc")
        .onSnapshot(snap => {
            const inventario = []
            let cantidad = 0
            snap.forEach(doc => {
                let producto = doc.data()
                if(parseInt(producto.cantidad) > 0){
                    cantidad = cantidad + parseInt(producto.cantidad)
                    inventario.push({ id: doc.id, ...doc.data() })
                }
            })
            console.log(inventario)
            setInventarioList(inventario)
            setCantidadExistencias(cantidad)
        },(error)=>{  
            setInventarioList([])
            setCantidadExistencias(0)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
            })
        })
    },[setCantidadExistencias])

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