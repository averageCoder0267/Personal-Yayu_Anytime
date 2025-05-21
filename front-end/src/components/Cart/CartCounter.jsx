
import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

export default function CartCounter({ current, max_limit, product }) {

    const { cart, cartDispatch } = useContext(CartContext);

    function Increment() {
        if (current == max_limit)
            return;
        const cartProducts = cart.products.map((element) => {
            if (product.name == element.name) {
                return { ...element, quantity: element.quantity + 1 };
            }
            return element;
        });
        cartDispatch({
            type: "CART_PRODUCTS",
            payload: cartProducts
        })
    }

    function Decrement() {
        let cartProducts = [];
        if (product.quantity == 1) {
            cartProducts = cart.products.filter((element) => {
                if (product.name != element.name)
                    return element;
            })
        } else {
            cartProducts = cart.products.map((element) => {
                if (product.name == element.name) {
                    return { ...element, quantity: element.quantity - 1 };
                }
                return element;
            });
        }
        cartDispatch({
            type: "CART_PRODUCTS",
            payload: cartProducts
        });
    }

    return (
        <button className="btn btn-success col-12 d-flex justify-content-around">
            <span className='px-2'
                onClick={Decrement}
            >-</span>
            <span>{current}</span>
            <span className='px-2'
                onClick={Increment}
            >+</span>
        </button>
    )
}