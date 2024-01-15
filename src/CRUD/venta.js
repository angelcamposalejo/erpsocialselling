import { inventarioStore } from "../config";

export const createVenta = async (compra,cantidadPedido,precioVenta,entregar,fechaEntrega,
    horaEntrega,lugarEntrega,utilidad) => {
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
                'lugarEntrega' : lugarEntrega,
                'utilidad' : utilidad
            })
        return "success"
    } catch (error) {
        return error
    }
}