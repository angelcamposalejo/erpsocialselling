import React from "react";


const CompraCard = ({compra}) => {

    return(
        <div className={"itemblog"}>
            <img src={process.env.PUBLIC_URL + "/imagenes/" + compra.img + ".jpeg"} alt="bandera" className="productoImagen"/>
            <h1 className='itemblogTitle'>{compra.tipoProducto}</h1>
            <h1 className='itemblogTitle'>{compra.descripcion}</h1> 
            <h1 className='itemblogTitle'>{"Cant. "+ compra.cantidad + " P/U $" + compra.precioUnitarioCompra}</h1>
            <h1 className='itemblogTitle'>{compra.proveedor}</h1>
            <h1 className='itemblogTitle'>{compra.fechaCompra}</h1>      
        </div>
    )
}

export default CompraCard