import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { inventarioStore } from "../../config";
import PedidoCard from "./PedidoCard";

const Pedidos = () => {

    const [isEdit,setIsEdit] = useState(false)
    const [inventarioList, setInventarioList] = useState([])
    const [itemSeleccionado, setItemSeleccionado] = useState({})
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("0")

    useEffect(()=>{
        inventarioStore.collection("pedidos").orderBy("fechaEntrega", "desc")
        .onSnapshot(snap => {
            const inventario = []
            snap.forEach(doc => {
                let producto = doc.data()
                if(!producto.entregado){
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
                    Existencias
                </div>
                {
                    isEdit
                        ?
                            null
                        :
                            <div className={"contenedor"}>
                                <div className='itemservespCont'>
                                    {
                                        inventarioList.map(compra => 
                                            <PedidoCard compra={compra}key={compra.id} setItemSeleccionado={setItemSeleccionado}
                                            setOpcionSeleccionada={setOpcionSeleccionada}/>
                                        )
                                    }
                                </div>
                            </div>

                }
            </div>
        </>
    )
}

export default Pedidos