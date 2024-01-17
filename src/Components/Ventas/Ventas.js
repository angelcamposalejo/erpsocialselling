import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { inventarioStore } from "../../config";
import VentaCard from "./VentaCard";

const Ventas = () => {

    const [inventarioList, setInventarioList] = useState([])

    useEffect(()=>{
        inventarioStore.collection("ventas").orderBy("fechaEntrega", "desc")
        .onSnapshot(snap => {
            const inventario = []
            snap.forEach(doc => {
                let producto = doc.data()
                if(parseInt(producto.cantidad) > 0){
                    inventario.push({ id: doc.id, ...doc.data() })
                }
            })
            console.log(inventario)
            setInventarioList(inventario)
        },(error)=>{  
            setInventarioList([])
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
            })
        })
    },[])

    return(
        <>
            <div className={"contenedor"} id="contenedorHoraFinal">
                <div className="contenedorEncabezado">
                    Ventas
                </div>
                <div className={"contenedor"}>
                    <div className='itemservespCont'>
                        {
                            inventarioList.map(compra => 
                                <VentaCard compra={compra}key={compra.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ventas