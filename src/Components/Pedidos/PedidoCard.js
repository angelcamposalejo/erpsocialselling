import React from "react";
import Swal from "sweetalert2"
import { updatePedido } from "../../CRUD/pedido";
import { createVenta } from "../../CRUD/venta";
import { createCaja } from "../../CRUD/caja";
import { GrStatusGood } from "react-icons/gr";


const PedidoCard = ({ compra, setItemSeleccionado, setOpcionSeleccionada }) => {

    const handleVentaClick = (item) => (event) => {
        event.preventDefault()
        setItemSeleccionado(item)
        setOpcionSeleccionada(1)
        console.log(item)
        solicitarPedido(item)
                        async function solicitarPedido(objeto){
                            const responseInventario = await updatePedido(objeto.id)
                    
                            if(responseInventario === "success"){//Registro de evento exitoso
                                let utilidad = objeto.precioVenta - objeto.producto.costo
                                const responsePedido = await createVenta(objeto.producto,objeto.cantidadPedido,objeto.precioVenta,objeto.entregar,objeto.fechaEntrega,objeto.horaEntrega,objeto.lugarEntrega,utilidad)
                    
                                if(responsePedido === "success"){//Registro de evento exitoso
                                    const responseCaja = await createCaja("Venta",objeto.fechaEntrega,objeto.precioVenta)
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
        alert("hola")
    }

    return(
        <div className={"itemblog"}>
            <img src={process.env.PUBLIC_URL + "/imagenes/" + "uno.jpg"} alt="bandera" className="productoImagen"/>
            <h1 className='itemblogTitle'>{compra.producto.tipoProducto}</h1>
            <h1 className='itemblogTitle'>{compra.producto.descripcion}</h1> 
            <h1 className='itemblogTitle'>{"Cant. "+ compra.cantidadPedido + " P/U $" + compra.precioVenta}</h1>
            <h1 className='itemblogTitle'>{"Entregar a: "+compra.entregar}</h1>
            <h1 className='itemblogTitle'>{"Lugar : "+compra.lugarEntrega}</h1>
            <h1 className='itemblogTitle'>{compra.fechaEntrega +" " + compra.horaEntrega}</h1>
            <br />
            {/* <span className='itemblogPedido' onClick={handlePedidoClick(compra)}><IoIosWarning /> Apartar</span>  */}
            <span className='itemblogEntrega' onClick={handleVentaClick(compra)}><GrStatusGood /> Entregar</span>      
        </div>
    )
}

export default PedidoCard