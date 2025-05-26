"use client"

import { Drawer, NumberInput, Tooltip } from "@mantine/core";
import { lexend } from "@/fonts";
import { DeliveryClock } from "@/assets/MyCartImages";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import CartCounter from "@/components/Cart/CartCounter";
import { AddressContext } from "@/contexts/AddressContext";
import { useDisclosure } from "@mantine/hooks";
import AddressModal from "../modal/addressModal";

export default function CartDrawer({ opened, handler }) {

    const { address } = useContext(AddressContext);
    const { cart, cartDispatch } = useContext(CartContext);
    const [tooltipOpened, setTooltipOpened] = useState(false);
    const [tip, setTip] = useState(10);
    const [currentAddress, setCurrentAddress] = useState(0);
    const [addressModalOpened, { open, close }] = useDisclosure(false);

    const tip20 = useRef();
    const tip30 = useRef();
    const tip50 = useRef();
    const tipCustom = useRef();
    const tipInput = useRef();
    const tipAddButton = useRef();

    useEffect(() => {
        console.log(address);
    })

    function tipButton(action) {
        if (action == 20) {
            if (tip20.current.children[0].classList.contains("border-success")) {
                tip20.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: null });
            } else {
                tip20.current.children[0].classList.add("border-success");
                tip30.current.children[0].classList.remove("border-success");
                tip50.current.children[0].classList.remove("border-success");
                tipCustom.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: 20 });
            }
        } else if (action == 30) {
            if (tip30.current.children[0].classList.contains("border-success")) {
                tip30.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: null });
            } else {
                tip30.current.children[0].classList.add("border-success");
                tip20.current.children[0].classList.remove("border-success");
                tip50.current.children[0].classList.remove("border-success");
                tipCustom.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: 30 });
            }
        } else if (action == 50) {
            if (tip50.current.children[0].classList.contains("border-success")) {
                tip50.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: null });
            } else {
                tip50.current.children[0].classList.add("border-success");
                tip20.current.children[0].classList.remove("border-success");
                tip30.current.children[0].classList.remove("border-success");
                tipCustom.current.children[0].classList.remove("border-success");
                cartDispatch({ type: "CART_TIP", payload: 50 });
            }
        } else if (action == "Custom") {
            if (tipCustom.current.children[0].classList.contains("border-success")) {
                tipCustom.current.children[0].classList.remove("border-success");
                tip20.current.classList.remove("d-none");
                tip30.current.classList.remove("d-none");
                tip50.current.classList.remove("d-none");
                tipInput.current.classList.add("d-none");
                tipAddButton.current.classList.add("d-none");
                cartDispatch({ type: "CART_TIP", payload: null });
            } else {
                tipCustom.current.children[0].classList.add("border-success");
                tip20.current.children[0].classList.remove("border-success");
                tip30.current.children[0].classList.remove("border-success");
                tip50.current.children[0].classList.remove("border-success");
                tip20.current.classList.add("d-none");
                tip30.current.classList.add("d-none");
                tip50.current.classList.add("d-none");
                tipInput.current.classList.remove("d-none");
                tipAddButton.current.classList.remove("d-none");
            }
        } else {
            tip20.current.classList.remove("d-none");
            tip30.current.classList.remove("d-none");
            tip50.current.classList.remove("d-none");
            tipInput.current.classList.add("d-none");
            tipAddButton.current.classList.add("d-none");
            cartDispatch({ type: "CART_TIP", payload: tip });
            setTip(10);
        }
    }

    const render_products = cart.products.map((element, index) => {
        return (
            <div className="d-flex my-3" key={index}>
                <div className="col-3 border rounded bg-light p-1">
                    <img className="img-fluid" src={element.image} alt="Check your internet connection"
                    />
                </div>
                <div className="col-6 px-2">
                    <p className="m-0">{element.name}</p>
                    <p className="fw-light m-0">{element.unit}</p>
                    <p className="fw-semibold m-0">₹ {element.price}</p>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <CartCounter current={element.quantity} max_limit={element.max_quantity} product={element} />
                </div>
            </div>
        );
    });

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
        <Drawer className={lexend.className} opened={opened} position="right" size="40vw" onClose={handler.close} title="My Cart">

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
                {render_products}
            </div>

            <div className="shadow border p-2 rounded-3 mt-4 px-2">
                <h4 className="fw-semibold m-0">Bill Details</h4>

                <div className="mt-3">
                    <p className="d-flex justify-content-between m-0 pe-1">
                        <span>
                            <i className="bi bi-receipt pe-2" />
                            <span>Items Total</span>
                        </span>
                        <span>
                            ₹ {items_total}
                        </span>
                    </p>
                    <p className="d-flex justify-content-between m-0 pe-1">
                        <span>
                            <i className="bi bi-bicycle pe-2" />
                            <span>
                                Delivery Charge
                                <Tooltip label="Free for Items worth ₹100 or above">
                                    <i type="button" className="bi bi-info-circle mx-2" />
                                </Tooltip>
                            </span>
                        </span>
                        <span>
                            {
                                (items_total < 100)
                                    ? <span>₹ {delivery_charge}</span>
                                    :
                                    <span>
                                        <span className="text-decoration-line-through">₹{delivery_charge}</span>
                                        <span className="text-primary fw-normal ms-1">FREE</span>
                                    </span>

                            }
                        </span>
                    </p>
                    <p className="d-flex justify-content-between m-0 pe-1">
                        <span>
                            <i className="bi bi-house-gear-fill pe-2" />
                            <span>
                                Handling Charge
                                <Tooltip label="For proper handling and ensuring high quality quick-deliveries">
                                    <i type="button" className="bi bi-info-circle mx-2" />
                                </Tooltip>
                            </span>
                        </span>
                        <span>
                            ₹ {handling_charge}
                        </span>
                    </p>
                    {
                        (tip_charge)
                            ?
                            <p className="d-flex justify-content-between m-0 pe-1">
                                <span>
                                    <i className="bi bi-person-fill pe-2" />
                                    <span>
                                        Tip for Delivery Partner
                                        <Tooltip label="For proper handling and ensuring high quality quick-deliveries">
                                            <i type="button" className="bi bi-info-circle mx-2" />
                                        </Tooltip>
                                    </span>
                                </span>
                                <span>
                                    ₹ {tip_charge}
                                </span>
                            </p> : ""
                    }
                    <p className="d-flex justify-content-between fw-semibold m-0 mt-2 pe-1">
                        <span>
                            Grand total
                        </span>
                        <span>
                            ₹ {total}
                        </span>
                    </p>
                </div>
            </div>

            <div className="shadow border rounded-3 mt-4 p-2">
                <h4 className="fw-semibold m-0">Tip your delivery partner</h4>
                <p className="fw-lighter lh-sm m-0 mt-2">Your kindness means a lot! 100% of your tip will go directly to your delivery partner.</p>
                <div className="row mx-auto mt-3">
                    <div ref={tip20} onClick={() => { tipButton(20) }} className="col-3 px-1 d-flex justify-content-center">
                        <div type="button" className="border border-2 rounded-3 d-flex justify-content-center p-2">😄 ₹20</div>
                    </div>
                    <div ref={tip30} onClick={() => { tipButton(30) }} className="col-3 px-1 d-flex justify-content-center">
                        <div type="button" className="border border-2 rounded-3 d-flex justify-content-center p-2">🤩 ₹30</div>
                    </div>
                    <div ref={tip50} onClick={() => { tipButton(50) }} className="col-3 px-1 d-flex justify-content-center">
                        <div type="button" className="border border-2 rounded-3 d-flex justify-content-center p-2">😍 ₹50</div>
                    </div>
                    <div ref={tipCustom} onClick={() => { tipButton("Custom") }} className="col-3 px-1 d-flex justify-content-center">
                        <div type="button" className="border border-2 rounded-3 d-flex justify-content-center p-2">👏 Custom</div>
                    </div>
                    <div ref={tipInput} className="col-6 px-1 d-flex justify-content-center d-none">
                        <NumberInput
                            size="md"
                            placeholder="Enter your tip"
                            min={0}
                            allowDecimal={false}
                            value={tip}
                            onChange={(event) => {
                                setTip(event);
                                if (event < 10)
                                    setTooltipOpened(true);
                                else
                                    setTooltipOpened(false);
                            }}
                        />
                    </div>
                    <div ref={tipAddButton} className="col-3 px-1 d-flex justify-content-center align-items-center d-none">
                        <Tooltip label="Amount should be greater than 10" offset={{ mainAxis: 6 }}
                            opened={tooltipOpened}>
                            <button onClick={tipButton}
                                className={`btn btn-success col-12 ${(tip < 10) ? "disabled" : ""} `}>Add</button>
                        </Tooltip>
                    </div>

                </div>
            </div>

            <div className="shadow border p-2 rounded-3 mt-4 px-2">
                <h4 className="fw-semibold m-0">Cancellation Policy</h4>
                <p className="fw-lighter lh-sm m-0 mt-2">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
            </div>

            <div className="border p-2 rounded-3 mt-5 px-2">
                <div className="d-flex align-items-center">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <i className="bi bi-geo-alt fs-5" />
                    </div>
                    <div className="col-9 px-2">
                        <h5 className="fw-semibold m-0 text-truncate">Delivery to
                            {
                                (address.length == 0)
                                    ? " Where" : ` ${address[currentAddress].saveAs}`
                            }
                        </h5>
                        <p className="text-dark-emphasis m-0 text-truncate">
                            {
                                (address.length == 0)
                                    ? "Add Address"
                                    : `${address[currentAddress].houseNo}, ${address[currentAddress].floor}, ${address[currentAddress].area}, Near ${address[currentAddress].landmark}`
                            }
                        </p>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <button type="button" onClick={open} className="btn btn-outline-success btn-sm">Change</button>
                    </div>
                </div>
                <div className="border btn btn-success d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <p className="m-0">₹ {total}</p>
                        <p className="m-0">Total</p>
                    </div>
                    <div>
                        Proceed to Pay
                        <i className="bi bi-chevron-right" />
                    </div>
                </div>
            </div>
            <AddressModal opened={addressModalOpened} close={close} current={currentAddress} currentFn={setCurrentAddress} />

        </Drawer >
    )
}
