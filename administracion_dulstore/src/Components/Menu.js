import React from "react";
import { FaBars } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { TbShoppingCartDollar } from "react-icons/tb";
import { GiBuyCard } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Menu = ({ setIsCompras, isCompras,
    setIsExistencias, isExistencias }) => {

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
        <header className="main-header">
            <label for="btn-nav" className="btn-nav"><i className="fas fa-bars"><FaBars /></i></label>
            <input type='checkbox' id="btn-nav"></input>
            {
                isCompras
                    ?
                        <nav>
                            <ul className="navigation">
                                <li onClick={handleMenuClick(1)}><span><GiShop /> Existencias</span></li>
                                <li onClick={handleMenuClick(2)}><span><TbShoppingCartDollar /> Ventas</span></li>
                                <li onClick={handleMenuClick(3)}><span className="active"><GiBuyCard /> Compras</span></li>
                                <li onClick={handleMenuClick(4)}><span><FaShippingFast /> Pedidos</span></li>
                                <li onClick={handleMenuClick(5)}><span><FaMoneyBillTransfer /> Caja</span></li>
                            </ul>
                        </nav>
                    :
                        isExistencias
                            ?
                                <nav>
                                    <ul className="navigation">
                                        <li onClick={handleMenuClick(1)}><span  className="active"><GiShop /> Existencias</span></li>
                                        <li onClick={handleMenuClick(2)}><span><TbShoppingCartDollar /> Ventas</span></li>
                                        <li onClick={handleMenuClick(3)}><span><GiBuyCard /> Compras</span></li>
                                        <li onClick={handleMenuClick(4)}><span><FaShippingFast /> Pedidos</span></li>
                                        <li onClick={handleMenuClick(5)}><span><FaMoneyBillTransfer /> Caja</span></li>
                                    </ul>
                                </nav>
                            :
                                null
            }
        </header>
    )
}

export default Menu