import React, { useState } from "react";
import Swal from "sweetalert2"
import { createCaja } from "../../CRUD/caja";

const RegistroCajaForm = ({ setIsRegistro,tipo }) => {

    const [cantidad, setCantidad] = useState("")
    const [fechaCompra, setFechacompra] = useState("")
    const [tipoProducto, setTipoProducto] = useState("")

    const handleCancelarClick = () => (event) => {
        event.preventDefault()
        setIsRegistro(false)
    }

    const handleRegistrarClick = () => (event) => {
        event.preventDefault()

        let cajaObject = {
            'concepto'  :   tipoProducto,
            'cantidad'  :   cantidad,
            'fecha'     :   fechaCompra
        }
        solicitarCaja(cajaObject)
    }

    const handleTipoProductoChange = (value) => {
        setTipoProducto(value)
    };

    const onChangeCantidad = (texto) => {
        setCantidad(texto.target.value.toString().toUpperCase())
    };

    const onChangeDateCompra = (date) => {
        setFechacompra(date.target.value)
    };

    async function solicitarCaja(objeto){
        const responseCaja = await createCaja(objeto.concepto,objeto.fecha,objeto.cantidad)
                if(responseCaja === "success"){//Registro de evento exitoso
                    Swal.fire({
                        icon: 'success',
                        title: 'Caja',
                        text: 'Movimiento registrado exitosamente',
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: "#04afaa",
                      }).then((result) => {
                        if (result.isConfirmed) {
                            //Se solicita el registro del evento
                            setCantidad("")

                        }
                    })
                }
                else{//Error en el registro de un evento
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: responseCaja,
                    })
                }
    }

    return(
        <div className="itemblogCajaForm">
            <div className="content-select">
                <h3 className="itemblogTitle">Concepto</h3>
            </div>
            <div className="content-select">
                    {
                        tipo
                            ?
                                <select value={tipoProducto} onChange={(e)=>handleTipoProductoChange(e.target.value)}>
                                    <option key={"Inversion"} value={"Inversion"}>{"Inversion"}</option>
                                    <option key={"Testing"} value={"Testing"}>{"Testing"}</option>
                                </select>
                            :
                                <select value={tipoProducto} onChange={(e)=>handleTipoProductoChange(e.target.value)}>
                                    <option key={"Gasolina"} value={"Gasolina"}>{"Gasolina"}</option>
                                    <option key={"Estacionamiento"} value={"Estacionamiento"}>{"Estacionamiento"}</option>
                                    <option key={"Paqueteria"} value={"Paqueteria"}>{"Paqueteria"}</option>
                                    <option key={"Retiro"} value={"Retiro"}>{"Retiro"}</option>
                                </select>
                            
                    }
                <i></i>
            </div>
            <div className="content-select">
                <h3 className="itemblogTitle">Cantidad</h3>
            </div>
            <div className="content-select">
                <input 
                    type={"text"} 
                    id="cantidad" 
                    name="cantidad" 
                    className="datos"
                    value={cantidad}
                    onChange={onChangeCantidad}
                    placeholder="Cantidad comprada"/>
            </div>
            <div className="content-select">
                <h3 className="itemblogTitle">Fecha del movimiento</h3>
            </div>
            <div className="content-select">
                <input 
                    type={"date"} 
                    id="fechaCompra" 
                    name="fechaCompra" 
                    className="datos"
                    value={fechaCompra}
                    onChange={onChangeDateCompra}/>
            </div>
            <br />
            <div className="wrapper">
                <button onClick={handleRegistrarClick()}>
                    Guardar
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button onClick={handleCancelarClick()} className="cancel">
                    Cancelar
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    )
}

export default RegistroCajaForm