import { inventarioStore } from "../config";

export const createCompra = async (compra) => {
    try {
        inventarioStore
            .collection("compras")
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