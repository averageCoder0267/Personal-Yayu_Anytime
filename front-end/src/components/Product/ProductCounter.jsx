"use client"

import { CartContext } from '@/contexts/CartContext';
import { useCounter } from '@mantine/hooks';
import { useContext, useEffect } from 'react';

export default function ProductCounter({ max_limit, product }) {

    const { cart, cartDispatch } = useContext(CartContext);
    const [count, handlers] = useCounter(0, { min: 0, max: max_limit });

    function Add() {
        handlers.increment();
        const element = {
            name: product.name,
            image: product.image,
            unit: product.unit,
            price: product.price,
            quantity: 1,
            max_quantity: product.quantity
        }
        const cartProduct = cart.products;
        cartProduct.push(element);
        cartDispatch({
            type: "CART_PRODUCTS",
            payload: cartProduct
        })
    }

    function Increment() {
        if (count == max_limit)
            return;
        handlers.increment();
        const cartProduct = cart.products.map((element) => {
            if (product.name == element.name) {
                element.quantity += 1;
            }
            return element;
        })
        cartDispatch({
            type: "CART_PRODUCTS",
            payload: cartProduct
        });
    }

    function Decrement() {
        handlers.decrement();
        const cartProduct = cart.products.filter((element) => {
            if (product.name == element.name) {
                if (element.quantity > 1) {
                    element.quantity -= 1;
                    return element;
                }
            } else
                return element;
        })
        cartDispatch({
            type: "CART_PRODUCTS",
            payload: cartProduct
        });
    }

    return (
        <>
            <button className="btn btn-success col-md-6 d-flex justify-content-around">
                {
                    (count == 0)
                        ?
                        <span className='col-12 px-3'
                            onClick={Add}>
                            Add
                        </span>
                        :
                        <>
                            <span className='px-2'
                                onClick={Decrement}
                            >-</span>
                            <span>{count}</span>
                            <span className='px-2'
                                onClick={Increment}
                            >+</span>
                        </>
                }
            </button>
        </>
    )
}