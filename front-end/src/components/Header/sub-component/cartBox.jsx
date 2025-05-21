"use client"
import { CartContext } from "@/contexts/CartContext";
import { lexend } from "@/fonts";
import { useContext } from "react";
import CartDrawer from "../drawer/cartDrawer";
import { useDisclosure } from "@mantine/hooks";

export default function CartBox() {

    const { cart } = useContext(CartContext);

    const [opened, handler] = useDisclosure(false);

    return (
        <div id="cartBox"
            className={`${lexend.className} border col-lg-2 d-lg-flex d-none justify-content-center align-items-center`}>
            <button className={`btn btn-success col-lg-9 fs-5 fw-semibold m-0 
                ${cart.products.length == 0 ? "disabled" : ""}`}
                onClick={handler.open}>
                {
                    (cart.products.length == 0)
                        ?
                        <span>
                            My Cart
                        </span>
                        :
                        <span>
                            <i className="bi bi-cart-check" />
                            &nbsp;
                            {`${cart.products.length} ${(cart.products.length == 1) ? "item" : "items"}`}
                        </span>
                }
            </button>
            <CartDrawer opened={opened} handler={handler} />
        </div>
    )
}