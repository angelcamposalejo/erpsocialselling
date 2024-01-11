import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { inventarioStore } from "../../config";
import RegistroCompraForm from "./RegistroCompraForm";
import CompraCard from "./CompraCard";

const Compras = () => {

    const [isRegistro,setIsRegistro] = useState(false)
    const [comprasList, setComprasList] = useState([])

    useEffect(()=>{
        inventarioStore.collection("compras").orderBy("fechaCompra", "desc")
        .onSnapshot(snap => {
            const inventario = []
            snap.forEach(doc => {
                inventario.push({ id: doc.id, ...doc.data() })
            })
            console.log(inventario)
            setComprasList(inventario)
        },(error)=>{  
            setComprasList([])
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error,
            })
        })
    },[])

    const handleRegistrarClick = () => (event) => {
        event.preventDefault()
        setIsRegistro(true)
    }

    return(
        <>
            <div className={"contenedor"} id="contenedorHoraFinal">
                <div className="contenedorEncabezado">
                    Compras
                </div>
                {
                    isRegistro
                        ?
                            <RegistroCompraForm setIsRegistro={setIsRegistro}/>
                        :
                            <>
                                <div className="wrapper">
                                    <button onClick={handleRegistrarClick()}>
                                        Registrar Compra
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <br />
                                <br />
                                <br />
                                <div className={"contenedor"}>
                                    <div className='itemservespCont'>
                                        {
                                            comprasList.map(compra => 
                                                <CompraCard compra={compra}key={compra.id}/>
                                            )
                                        }
                                    </div>
                                </div>
                            </>
                }
            </div>
        </>
        
    )
}

export default Compras
