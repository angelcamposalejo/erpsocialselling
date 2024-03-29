import { inventarioStore } from "../config";

export const createPedido = async (compra,cantidadPedido,precioVenta,entregar,fechaEntrega,
    horaEntrega,lugarEntrega) => {
    try {
        inventarioStore
            .collection("pedidos")
            .add({
                'producto'          :   compra,
                'cantidadPedido'           :   cantidadPedido,
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

export const updatePedido = async (id) => {
    try {
        await inventarioStore
        .collection("pedidos")
        .doc(id)
        .update({
            'entregado' : true
        })
        return "success"
      } catch (error) {
        return error
      }
}