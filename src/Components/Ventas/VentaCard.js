import React from "react";


const VentaCard = ({ compra, setItemSeleccionado, setOpcionSeleccionada }) => {

    return(
        <div className={"itemblog"}>
            <img src={process.env.PUBLIC_URL + "/imagenes/" + "uno.jpg"} alt="bandera" className="productoImagen"/>
            <h1 className='itemblogTitle'>{compra.producto.tipoProducto}</h1>
            <h1 className='itemblogTitle'>{compra.producto.descripcion}</h1> 
            <h1 className='itemblogTitle'>{"Cant. "+ compra.cantidad + " P/U $" + compra.precioVenta}</h1>
            <h1 className='itemblogTitle'>{"Utilidad $" + compra.utilidad}</h1>
            <h1 className='itemblogTitle'>{"Entregar a: "+compra.entregar}</h1>
            <h1 className='itemblogTitle'>{"Lugar : "+compra.lugarEntrega}</h1>
            <h1 className='itemblogTitle'>{compra.fechaEntrega +" " + compra.horaEntrega}</h1>     
        </div>
    )
}

export default VentaCard