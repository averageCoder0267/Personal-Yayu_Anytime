"use client"
import { usePathname } from "next/navigation"

export default function DeliveryBox() {

    const pathname = usePathname();

    return (
        <div id="deliveryBox"
            className={`col-lg-3 ${(pathname == "/") ? "col-sm-10 col-10" : "col-sm-8 col-8"} px-4 py-2`}>
            <h5 className="fw-semibold m-0">Delivery in 10 minutes</h5>
            <p className="text-truncate m-0">1921, Street No. 2, Kailash Nagar, Delhi-31</p>
        </div>
    )
}