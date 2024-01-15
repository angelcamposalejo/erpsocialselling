import { inventarioStore } from "../config";

export const createInventario = async (compra) => {
    try {
        inventarioStore
            .collection("inventario")
            .add({
                'tipoProducto'          :   compra.tipoProducto,
                'descripcion'           :   compra.descripcion,
                'cantidad'              :   compra.cantidad,
                'precioUnitarioCompra'  :   compra.precioUnitarioCompra,
                'costoUnitarioCompra'   :   compra.costoUnitarioCompra,
                'costo'                 :   compra.costo,
                'gasto'                 :   compra.gasto,
                'proveedor'             :   compra.proveedor,
                'fechaCompra'           :   compra.fechaCompra
            })
        return "success"
    } catch (error) {
        return error
    }
}

export const updateInventario = async (id,cantidad) => {
    try {
        await inventarioStore
        .collection("inventario")
        .doc(id)
        .update({
            'cantidad' : cantidad
        })
        return "success"
      } catch (error) {
        return error
      }
}