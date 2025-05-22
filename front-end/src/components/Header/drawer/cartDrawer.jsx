"use client"

import { Drawer } from "@mantine/core";
import { lexend } from "@/fonts";
import { DeliveryClock } from "@/assets/MyCartImages";
import { useContext, useEffect } from "react";
import { CartContext } from "@/contexts/CartContext";
import CartCounter from "@/components/Cart/CartCounter";

export default function CartDrawer({ opened, handler }) {

    const { cart } = useContext(CartContext);

    const renderProducts = cart.products.map((element, index) => {
        return (
            <div className="d-flex mt-5" key={index}>
                <div className="col-3 border bg-light p-1">

                    <img className="img-fluid" src={element.image} alt="Check your internet connection"
                    />
                </div>
                <div className="col-6 px-2">
                    <p className="m-0" style={{ fontSize: "13px" }}>{element.name}</p>
                    <p className="fw-light m-0" style={{ fontSize: "13px" }}>{element.unit}</p>
                    <p className="fw-semibold m-0" style={{ fontSize: "13px" }}>₹ {element.price}</p>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <CartCounter current={element.quantity} max_limit={element.max_quantity} product={element} />
                </div>
            </div>
        );
    })

    return (
        <Drawer className={lexend.className} opened={opened} position="right" onClose={handler.close} title="My Cart">

            <div className="shadow border p-2 rounded-3">
                <div className="d-flex align-items-center">
                    <div className="col-2">
                        <img className="img-fluid" src={DeliveryClock.src} alt="Check your internet connection" />
                    </div>
                    <div className="col-10 px-3">
                        <h4 className="fw-semibold m-0">Delivery in 10 minutes</h4>
                        <p className="text-dark-emphasis m-0">Shipment of {cart.products.length} {(cart.products.length == 1) ? "item" : "items"}
                        </p>
                    </div>
                </div>
                {renderProducts}
            </div>

            <div className="shadow border p-2 rounded-3 mt-4">

            </div>

        </Drawer>
    )
}