"use client"
import { usePathname } from "next/navigation"

export default function BackButton() {

    const pathname = usePathname();

    return (
        <>
            {
                (pathname == "/") ? "" :
                    < div id="backButton"
                        className=" col-2 d-lg-none d-flex justify-content-center align-items-center p-0" >
                        <i className="bi bi-arrow-left fw-bold m-0 p-0"></i>
                    </div >
            }
        </>
    )
}