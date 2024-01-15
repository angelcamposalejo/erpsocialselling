import React, { useEffect } from "react";
import { GiShop } from "react-icons/gi";
import { TbShoppingCartDollar } from "react-icons/tb";
import { GiBuyCard } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Menu = ({ setIsCompras, isCompras,
    setIsExistencias, isExistencias }) => {

    useEffect(()=>{
        console.log(isCompras)
    },[isCompras])

    const handleMenuClick = (opcion) => (event) => {
        event.preventDefault()
        switch(opcion){
            case 1:
                setIsExistencias(true)
                setIsCompras(false)
                break
            case 3:
                setIsExistencias(false)
                setIsCompras(true)
                break
            default:
                setIsExistencias(false)
                setIsCompras(true)
                break
                
        }
    }

    return(
        <div className='menu_top'>
                <div className='maxwidth'>
                    {
                        isCompras 
                            ?
                                <>
                                    <div className='opc_menu' onClick={handleMenuClick(1)} style={{ color: 'black' }}><GiShop /> Existencias</div>
                                    <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}><FaShippingFast /> Pedidos</div>
                                    <div className='opc_menuSeleccionada' onClick={handleMenuClick(3)} style={{ color: 'black' }}><GiBuyCard /> Compras</div>
                                    <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}><TbShoppingCartDollar /> Ventas</div>
                                    <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}><FaMoneyBillTransfer /> Caja</div>
                                </>
                            :
                                isExistencias
                                    ?
                                        <>
                                            <div className='opc_menuSeleccionada' onClick={handleMenuClick(1)} style={{ color: 'black' }}><GiShop /> Existencias</div>
                                            <div className='opc_menu' onClick={handleMenuClick(2)} style={{ color: 'black' }}><FaShippingFast /> Pedidos</div>
                                            <div className='opc_menu' onClick={handleMenuClick(3)} style={{ color: 'black' }}><GiBuyCard /> Compras</div>
                                            <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}><TbShoppingCartDollar /> Ventas</div>
                                            <div className='opc_menu' onClick={handleMenuClick(4)} style={{ color: 'black' }}><FaMoneyBillTransfer /> Caja</div>
                                        </>
                                    :
                                        null
                    }
                </div>
            </div>
    )
}

export default Menu