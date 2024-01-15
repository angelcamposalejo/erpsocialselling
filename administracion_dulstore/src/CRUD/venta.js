import { inventarioStore } from "../config";

export const createVenta = async (compra,cantidadPedido,precioVenta,entregar,fechaEntrega,
    horaEntrega,lugarEntrega) => {
    try {
        inventarioStore
            .collection("ventas")
            .add({
                'producto'          :   compra,
                'cantidad'           :   cantidadPedido,
                'precioVenta'              :   precioVenta,
                'entregar'             :   entregar,
                'fechaEntrega'           :   fechaEntrega,
                'horaEntrega' : horaEntrega,
                'lugarEntrega' : lugarEntrega
            })
        return "success"
    } catch (error) {
        return error
    }
}