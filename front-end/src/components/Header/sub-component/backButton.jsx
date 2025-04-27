"use client"
import { usePathname, useRouter } from "next/navigation"

export default function BackButton() {

    const pathname = usePathname();
    const router = useRouter();

    function goBack() {
        router.back();
    }

    return (
        <>
            {
                (pathname == "/") ? "" :
                    < div id="backButton" onClick={goBack}
                        className=" col-2 d-lg-none d-flex justify-content-center align-items-center p-0" >
                        <i className="bi bi-arrow-left fw-bold m-0 p-0"></i>
                    </div >
            }
        </>
    )
}