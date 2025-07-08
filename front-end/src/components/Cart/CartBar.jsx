"use client"

import { CartContext } from "@/contexts/CartContext";
import { lexend } from "@/fonts";
import { useContext, useEffect } from "react";
import CartDrawer from "../Header/drawer/cartDrawer";
import { useDisclosure } from "@mantine/hooks";

export default function CartBar() {

    const { cart } = useContext(CartContext);
    const [opened, handler] = useDisclosure(false);
    const { products } = cart;

    useEffect(() => {
        if (cart.products.length == 0)
            handler.close();
    }, [cart.products.length])

    const items_total = cart.products.reduce((accumulator, current) => {
        return accumulator += current.price * current.quantity;
    }, 0);

    const delivery_charge = cart.delivery_charge;
    const handling_charge = cart.handling_charge;
    const tip_charge = cart.tips;
    const total =
        (tip_charge)
            ?
            (items_total < 100)
                ? items_total + delivery_charge + handling_charge + tip_charge
                : items_total + handling_charge + tip_charge
            :
            (items_total < 100)
                ? items_total + delivery_charge + handling_charge
                : items_total + handling_charge

    return (
        <>
            <div className={`d-lg-none ${(products.length == 0) || opened ? "d-none" : "d-block"} position-fixed fixed-bottom p-2 ${lexend.className}`}>
                <div onClick={handler.open} className="btn btn-success d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="border rounded d-flex justify-content-center align-items-center px-3 py-1">
                            <i className="bi bi-cart-check text-light fs-4" />
                        </div>
                        <div className="text-light mx-2">
                            <p className="m-0">
                                {
                                    (products.length == 1)
                                        ? `${products.length} Item`
                                        : `${products.length} Items`
                                }
                            </p>
                            <p className="fw-semibold m-0">₹ {total}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mx-1">
                        <p className="text-light fs-5 m-0">View Cart <i className="bi bi-caret-right-fill" /></p>
                    </div>
                </div>
            </div>
            <CartDrawer opened={opened} handler={handler} />
        </>
    )
}