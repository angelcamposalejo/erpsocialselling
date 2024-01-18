import React from "react";
import { GiShop } from "react-icons/gi";
import { TbShoppingCartDollar } from "react-icons/tb";
import { GiBuyCard } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Menu = ({ setIsCompras, isCompras,
    setIsExistencias, isExistencias,
    setIsCaja, isCaja,
    balance,
    setIsPedido, isPedido,
    setIsVentas, isVentas,
    cantidadExistencias, cantidadPedidos }) => {

    const handleMenuClick = (opcion) => (event) => {
        event.preventDefault()
        switch(opcion){
            case 1://Existencias
                setIsExistencias(true)
                setIsCompras(false)
                setIsCaja(false)
                setIsPedido(false)
                setIsVentas(false)
                break
            case 2://pedidos
                setIsExistencias(false)
                setIsCompras(false)
                setIsCaja(false)
                setIsPedido(true)
                setIsVentas(false)
                break
            case 3://compras
                setIsExistencias(false)
                setIsCompras(true)
                setIsCaja(false)
                setIsPedido(false)
                setIsVentas(false)
                break
            case 4://Ventas
                setIsExistencias(false)
                setIsCompras(false)
                setIsCaja(false)
                setIsPedido(false)
                setIsVentas(true)
                break
            case 5://Caja
                setIsExistencias(false)
                setIsCompras(false)
                setIsCaja(true)
                setIsPedido(false)
                setIsVentas(false)
                break
            default:
                setIsExistencias(true)
                setIsCompras(false)
                setIsCaja(false)
                setIsPedido(false)
                setIsVentas(false)
                break
                
        }
    }

    return(
        <div className='menu_top'>
                <div className='maxwidth'>
                    <div className='opc_saldo'> ${balance}</div>
                    {
                        isCompras 
                            ?
                                <>
                                    <div className='opc_menu' onClick={handleMenuClick(1)} style={{ color: 'black' }}> <GiShop /> ({cantidadExistencias})</div>
                                    <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}> <FaShippingFast /> ({cantidadPedidos})</div>
                                    <div className='opc_menuSeleccionada' onClick={handleMenuClick(3)} style={{ color: 'black' }}> <GiBuyCard /> </div>
                                    <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}> <TbShoppingCartDollar /> </div>
                                    <div className='opc_menu' onClick={handleMenuClick(5)} style={{ color: 'black' }}> <FaMoneyBillTransfer /> </div>
                                </>
                            :
                                isExistencias
                                    ?
                                        <>
                                            <div className='opc_menuSeleccionada' onClick={handleMenuClick(1)} style={{ color: 'black' }}> <GiShop /> ({cantidadExistencias})</div>
                                            <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}> <FaShippingFast /> ({cantidadPedidos})</div>
                                            <div className='opc_menu' onClick={handleMenuClick(3)} style={{ color: 'black' }}> <GiBuyCard /> </div>
                                            <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}> <TbShoppingCartDollar /> </div>
                                            <div className='opc_menu' onClick={handleMenuClick(5)} style={{ color: 'black' }}> <FaMoneyBillTransfer /> </div>
                                        </>
                                    :
                                        isCaja
                                            ?
                                                <>
                                                    <div className='opc_menu' onClick={handleMenuClick(1)} style={{ color: 'black' }}> <GiShop /> ({cantidadExistencias})</div>
                                                    <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}> <FaShippingFast /> ({cantidadPedidos})</div>
                                                    <div className='opc_menu' onClick={handleMenuClick(3)} style={{ color: 'black' }}> <GiBuyCard /> </div>
                                                    <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}> <TbShoppingCartDollar /> </div>
                                                    <div className='opc_menuSeleccionada' onClick={handleMenuClick(5)} style={{ color: 'black' }}> <FaMoneyBillTransfer /> </div>
                                                </>
                                            :
                                                isPedido
                                                ?
                                                    <>
                                                        <div className='opc_menu' onClick={handleMenuClick(1)} style={{ color: 'black' }}> <GiShop /> ({cantidadExistencias})</div>
                                                        <div className='opc_menuSeleccionada' onClick={handleMenuClick(2)} style={{ color: 'black' }}> <FaShippingFast /> ({cantidadPedidos})</div>
                                                        <div className='opc_menu' onClick={handleMenuClick(3)} style={{ color: 'black' }}> <GiBuyCard /> </div>
                                                        <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}> <TbShoppingCartDollar /> </div>
                                                        <div className='opc_menu' onClick={handleMenuClick(5)} style={{ color: 'black' }}> <FaMoneyBillTransfer /> </div>
                                                    </>
                                                :
                                                    isVentas
                                                    ?
                                                        <>
                                                            <div className='opc_menu' onClick={handleMenuClick(1)} style={{ color: 'black' }}> <GiShop /> ({cantidadExistencias})</div>
                                                            <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}> <FaShippingFast /> ({cantidadPedidos})</div>
                                                            <div className='opc_menu' onClick={handleMenuClick(3)} style={{ color: 'black' }}> <GiBuyCard /> </div>
                                                            <div className='opc_menuSeleccionada' onClick={handleMenuClick(4)} style={{ color: 'black' }}> <TbShoppingCartDollar /> </div>
                                                            <div className='opc_menu' onClick={handleMenuClick(5)} style={{ color: 'black' }}> <FaMoneyBillTransfer /> </div>
                                                        </>
                                                    :
                                                        null
                    }
                </div>
            </div>
    )
}

export default Menu