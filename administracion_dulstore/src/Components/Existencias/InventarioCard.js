import React, { useState } from "react";
import Swal from "sweetalert2"
import { updateInventario } from "../../CRUD/inventario";
import { createPedido } from "../../CRUD/pedido";
import { createVenta } from "../../CRUD/venta";
import { createCaja } from "../../CRUD/caja";
import { IoIosWarning } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";


const InventarioCard = ({ compra, setItemSeleccionado, setOpcionSeleccionada }) => {

    const [fechaActual, setFechaActual] = useState("")

    const handlePedidoClick = (item) => (event) => {
        event.preventDefault()
        setItemSeleccionado(item)
        setOpcionSeleccionada(1)
        Swal.fire({
            customClass:'modalRegistro',
            html:`<div class="form_wrapper">
                <div class="form_container">
                    <div class="row clearfix">
                        <div class="">
                            <form autocomplete="off" method="post">
                                <div class="input_field">
                                    <p>Cantidad</p>
                                    <input type="text" name="inputCedula" id="inputCedula" 
                                    placeholder="Ingrese la cantidad del pedido" required class="inputText" autocomplete="off" 
                                    value="`+item.cantidad+`" />
                                </div>
                                <div class="input_field">
                                    <p>Precio de venta</p>
                                    <input type="text" name="inputVenta" id="inputVenta" 
                                    placeholder="Ingrese el precio de venta" required class="inputText" autocomplete="off" 
                                    value="" />
                                </div>
                                <div class="input_field">
                                    <p>A quien se entregara?</p>
                                    <input type="text" name="inputPidio" id="inputPidio" 
                                    placeholder="Ingrese el nombre de quien realiza el pedido" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                                <div class="input_field">
                                    <p>Fecha de entrega</p>
                                    <input type="date" name="inputNombre" id="inputNombre" 
                                    placeholder="Ingrese el nombre del usuario" required  class="inputText" autocomplete="off" 
                                    value="`+fechaActual+`" 
                                    />
                                </div>
                                <div class="input_field">
                                    <p>Hora de entrega</p>
                                    <input type="text" name="inputHora" id="inputHora" 
                                    placeholder="Ingrese la hora de entrega" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                                <div class="input_field">
                                    <p>Lugar de entrega</p>
                                    <input type="text" name="inputLugar" id="inputLugar" 
                                    placeholder="Ingrese la hora de entrega" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`,
            showCancelButton: true,
            denyButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            denyButtonColor: "red",
            cancelButtonColor: "grey",
            confirmButtonText: "Actualizar",
            confirmButtonColor: "#04afaa",
            scrollbarPadding:false,
            width:'500px',
            heightAuto: false,
            focusConfirm: false,
            showCloseButton:true,
            preConfirm: () => {
                if (document.getElementById('inputNombre').value) {//Se verifica que se haya proporcionado un nombre de usuario valido
                    if (document.getElementById('inputCedula').value) {//Se verifica que se haya proporcionado un nombre de usuario valido
                        let cantidadPedido = document.getElementById('inputCedula').value
                        let precioVenta = document.getElementById('inputVenta').value
                        let entregar = document.getElementById('inputPidio').value
                        let fechaEntrega = document.getElementById('inputNombre').value
                        let horaEntrega = document.getElementById('inputHora').value
                        let lugarEntrega = document.getElementById('inputLugar').value
                        let cantidadRestante = item.cantidad - cantidadPedido


                        solicitarPedido(item)
                        async function solicitarPedido(objeto){
                            const responseInventario = await updateInventario(objeto.id,cantidadRestante)
                    
                            if(responseInventario === "success"){//Registro de evento exitoso
                                const responsePedido = await createPedido(objeto,cantidadPedido,precioVenta,entregar,fechaEntrega,horaEntrega,lugarEntrega)
                    
                                if(responsePedido === "success"){//Registro de evento exitoso
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Pedidos',
                                        text: 'Pedido registrado exitosamente',
                                        confirmButtonText: "Aceptar",
                                        confirmButtonColor: "#04afaa",
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                            //Se solicita el registro del evento
                                            
                
                                        }
                                    })
                                }
                                else{//Error en el registro de un evento
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Error',
                                        text: responsePedido,
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
                        
                    } else {//Nombre de usuario invalido
                        Swal.showValidationMessage('Proporcione la fecha en que se realizo el mantenimiento')   
                    }
                } else {//Nombre de usuario invalido
                    Swal.showValidationMessage('Proporcione la fecha en que se realizo el mantenimiento')   
                }
            }
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            console.log("Aqui")
        })
    }

    const handleVentaClick = (item) => (event) => {
        event.preventDefault()
        setItemSeleccionado(item)
        setOpcionSeleccionada(1)
        Swal.fire({
            customClass:'modalRegistro',
            html:`<div class="form_wrapper">
                <div class="form_container">
                    <div class="row clearfix">
                        <div class="">
                            <form autocomplete="off" method="post">
                                <div class="input_field">
                                    <p>Cantidad</p>
                                    <input type="text" name="inputCedula" id="inputCedula" 
                                    placeholder="Ingrese la cantidad del pedido" required class="inputText" autocomplete="off" 
                                    value="`+item.cantidad+`" />
                                </div>
                                <div class="input_field">
                                    <p>Precio de venta</p>
                                    <input type="text" name="inputVenta" id="inputVenta" 
                                    placeholder="Ingrese el precio de venta" required class="inputText" autocomplete="off" 
                                    value="" />
                                </div>
                                <div class="input_field">
                                    <p>A quien se entrego?</p>
                                    <input type="text" name="inputPidio" id="inputPidio" 
                                    placeholder="Ingrese el nombre de quien se realiza la venta" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                                <div class="input_field">
                                    <p>Fecha de entrega</p>
                                    <input type="date" name="inputNombre" id="inputNombre" 
                                    placeholder="Ingrese el nombre del usuario" required  class="inputText" autocomplete="off" 
                                    value="`+fechaActual+`" 
                                    />
                                </div>
                                <div class="input_field">
                                    <p>Hora de entrega</p>
                                    <input type="text" name="inputHora" id="inputHora" 
                                    placeholder="Ingrese la hora de entrega" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                                <div class="input_field">
                                    <p>Lugar de entrega</p>
                                    <input type="text" name="inputLugar" id="inputLugar" 
                                    placeholder="Ingrese la hora de entrega" required class="inputText" autocomplete="off" 
                                    value=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`,
            showCancelButton: true,
            denyButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            denyButtonColor: "red",
            cancelButtonColor: "grey",
            confirmButtonText: "Actualizar",
            confirmButtonColor: "#04afaa",
            scrollbarPadding:false,
            width:'500px',
            heightAuto: false,
            focusConfirm: false,
            showCloseButton:true,
            preConfirm: () => {
                if (document.getElementById('inputNombre').value) {//Se verifica que se haya proporcionado un nombre de usuario valido
                    if (document.getElementById('inputCedula').value) {//Se verifica que se haya proporcionado un nombre de usuario valido
                        let cantidadPedido = document.getElementById('inputCedula').value
                        let precioVenta = document.getElementById('inputVenta').value
                        let entregar = document.getElementById('inputPidio').value
                        let fechaEntrega = document.getElementById('inputNombre').value
                        let horaEntrega = document.getElementById('inputHora').value
                        let lugarEntrega = document.getElementById('inputLugar').value
                        let cantidadRestante = item.cantidad - cantidadPedido

                        console.log(item)
                        solicitarPedido(item)
                        async function solicitarPedido(objeto){
                            const responseInventario = await updateInventario(objeto.id,cantidadRestante)
                    
                            if(responseInventario === "success"){//Registro de evento exitoso
                                let utilidad = precioVenta - item.costo
                                const responsePedido = await createVenta(objeto,cantidadPedido,precioVenta,entregar,fechaEntrega,horaEntrega,lugarEntrega,utilidad)
                    
                                if(responsePedido === "success"){//Registro de evento exitoso
                                    const responseCaja = await createCaja("Venta",fechaEntrega,precioVenta)
                                    if(responseCaja === "success"){//Registro de evento exitoso
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Ventas',
                                            text: 'Venta registrada exitosamente',
                                            confirmButtonText: "Aceptar",
                                            confirmButtonColor: "#04afaa",
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                                //Se solicita el registro del evento
                                                
                    
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
                                        text: responsePedido,
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
                        
                    } else {//Nombre de usuario invalido
                        Swal.showValidationMessage('Proporcione la fecha en que se realizo el mantenimiento')   
                    }
                } else {//Nombre de usuario invalido
                    Swal.showValidationMessage('Proporcione la fecha en que se realizo el mantenimiento')   
                }
            }
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            console.log("Aqui")
        })
    }

    return(
        <div className={"itemblog"}>
            <img src={process.env.PUBLIC_URL + "/imagenes/" + "uno.jpg"} alt="bandera" className="productoImagen"/>
            <h1 className='itemblogTitle'>{compra.tipoProducto}</h1>
            <h1 className='itemblogTitle'>{compra.descripcion}</h1> 
            <h1 className='itemblogTitle'>{"Cant. "+ compra.cantidad + " P/U $" + compra.precioUnitarioCompra}</h1>
            <h1 className='itemblogTitle'>{compra.proveedor}</h1>
            <h1 className='itemblogTitle'>{compra.fechaCompra}</h1>
            <br />
            <span className='itemblogPedido' onClick={handlePedidoClick(compra)}><IoIosWarning /> Apartar</span> 
            <span className='itemblogEntrega' onClick={handleVentaClick(compra)}><GrStatusGood /> Entregar</span>      
        </div>
    )
}

export default InventarioCard