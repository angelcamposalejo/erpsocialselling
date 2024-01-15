import React from "react";

const CajaTable = ({ cajaList }) => {

    return (
        <>
        <div className="Table">
            <div className="Heading">
                <div className="Cell">
                    <p>Fecha</p>
                </div>
                <div className="Cell">
                    <p>Concepto</p>
                </div>
                <div className="Cell">
                    <p>Cantidad</p>
                </div>
            </div>
            {
                cajaList.map(event => 
                    <div className="Row" key={event.id}>
                        <div className="Cell">
                            <p>{event.fecha}</p>
                        </div>
                        <div className="Cell">
                            <p>{event.concepto}</p>
                        </div>
                        <div className="Cell">
                            <p>${event.cantidad}</p>
                        </div>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default CajaTable;