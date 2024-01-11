import { inventarioStore } from "../config";

export const createCaja = async (concepto,fecha,cantidad) => {
    try {
        inventarioStore
            .collection("caja")
            .add({
                'concepto'      :   concepto,
                'cantidad'      :   cantidad,
                'fecha'         :   fecha
            })
        return "success"
    } catch (error) {
        return error
    }
}