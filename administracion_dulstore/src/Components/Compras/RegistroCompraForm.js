import React, { useState } from "react";
import Swal from "sweetalert2"
import { createCompra } from "../../CRUD/compras";
import { createInventario } from "../../CRUD/inventario";
import { createCaja } from "../../CRUD/caja";

const RegistroCompraForm = ({setIsRegistro}) => {

    const [cantidad, setCantidad] = useState("")
    const [costoUnitarioCompra, setCostoUnitarioCompra] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [fechaCompra, setFechacompra] = useState("")
    const [precioUnitarioCompra, setPrecioUnitarioCompra] = useState("")
    const [proveedor, setProveedor] = useState("")
    const [tipoProducto, setTipoProducto] = useState("")

    const handleCancelarClick = () => (event) => {
        event.preventDefault()
        setIsRegistro(false)
    }

    const handleRegistrarClick = () => (event) => {
        event.preventDefault()
        let costo = parseFloat(costoUnitarioCompra) + parseFloat(precioUnitarioCompra)
        let gasto = parseFloat(precioUnitarioCompra) * parseInt(cantidad)
        
        let tipo = "Ropa"
        if(tipoProducto){
            tipo = tipoProducto
        }

        let compraObject = {
            'tipoProducto'          :   tipo,
            'descripcion'           :   descripcion,
            'cantidad'              :   cantidad,
            'precioUnitarioCompra'  :   precioUnitarioCompra,
            'costoUnitarioCompra'   :   costoUnitarioCompra,
            'costo'                 :   costo,
            'gasto'                :   gasto,
            'proveedor'             :   proveedor,
            'fechaCompra'           :   fechaCompra
        }
        solicitarCompra(compraObject)
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

    const onChangeDescripcion = (texto) => {
        setDescripcion(texto.target.value.toString().toUpperCase())
    };

    const onChangeCostoCompra = (texto) => {
        setCostoUnitarioCompra(texto.target.value.toString().toUpperCase())
    };

    const onChangePrecioCompra = (texto) => {
        setPrecioUnitarioCompra(texto.target.value.toString().toUpperCase())
    };

    const onChangeProveedor = (texto) => {
        setProveedor(texto.target.value.toString().toUpperCase())
    };

    async function solicitarCompra(objeto){
        const responseCompra = await createCompra(objeto)

        if(responseCompra === "success"){//Registro de evento exitoso
            const responseInventario = await createInventario(objeto)

            if(responseInventario === "success"){//Registro de evento exitoso
                const responseCaja = await createCaja("Compra",objeto.fechaCompra,objeto.gasto)
                if(responseCaja === "success"){//Registro de evento exitoso
                    Swal.fire({
                        icon: 'success',
                        title: 'Compras',
                        text: 'Compra registrada exitosamente',
                        confirmButtonText: "Aceptar",
                        confirmButtonColor: "#04afaa",
                      }).then((result) => {
                        if (result.isConfirmed) {
                            //Se solicita el registro del evento
                            setDescripcion("")
                            setCantidad("")
                            setPrecioUnitarioCompra("")
                            setCostoUnitarioCompra("")
                            setProveedor("")

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
            else{//Error en el registro de un evento
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: responseInventario,
                })
            }
        }
        else{//Error en el registro de un evento
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: responseCompra,
              })
        }
    }

    return(
        <div className="form">
            <div className="content-select">
                <h3 className="modalText">Tipo de Producto</h3>
            </div>
            <div className="content-select">
                <select value={tipoProducto} onChange={(e)=>handleTipoProductoChange(e.target.value)}>
                    <option key={"Ropa"} value={"Ropa"}>{"Ropa"}</option>
                    <option key={"Postres"} value={"Postres"}>{"Postres"}</option>
                    <option key={"Maquillaje"} value={"Maquillaje"}>{"Maquillaje"}</option>
                </select>
                <i></i>
            </div>
            <div className="content-select">
                <h3 className="modalText">Descripcion</h3>
            </div>
            <div className="content-select">
                <textarea
                    className="datos"
                    id="descripcion" 
                    name="descripcion"
                    value={descripcion}
                    onChange={onChangeDescripcion}
                    rows="4"
                />
            </div>
            <div className="content-select">
                <h3 className="modalText">Cantidad</h3>
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
                <h3 className="modalText">Precio Unitario de Compra</h3>
            </div>
            <div className="content-select">
                <input 
                    type={"text"} 
                    id="precioUnitarioCompra" 
                    name="precioUnitarioCompra" 
                    className="datos"
                    value={precioUnitarioCompra}
                    onChange={onChangePrecioCompra}
                    placeholder="Precio unitario de la compra"/>
            </div>
            <div className="content-select">
                <h3 className="modalText">Costo Unitario de Compra</h3>
            </div>
            <div className="content-select">
                <input 
                    type={"text"} 
                    id="costoUnitarioCompra" 
                    name="costoUnitarioCompra" 
                    className="datos"
                    value={costoUnitarioCompra}
                    onChange={onChangeCostoCompra}
                    placeholder="Costo unitario de la compra"/>
            </div>
            <div className="content-select">
                <h3 className="modalText">Proveedor</h3>
            </div>
            <div className="content-select">
                <input 
                    type={"text"} 
                    id="proveedor" 
                    name="proveedor" 
                    className="datos"
                    value={proveedor}
                    onChange={onChangeProveedor}
                    placeholder="Proveedor"/>
            </div>
            <div className="content-select">
                <h3 className="modalText">Fecha de la compra</h3>
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

export default RegistroCompraForm