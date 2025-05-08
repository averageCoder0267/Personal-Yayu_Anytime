"use client"
import { AddressContext } from "@/contexts/AddressContext";
import { AuthContext } from "@/contexts/AuthContext";
import { lexend } from "@/fonts";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function DefaultAccount({ content }) {

    const router = useRouter();
    const { authDispatch } = useContext(AuthContext);
    const {addressDispatch} = useContext(AddressContext);

    function MouseEnterStyling(ele) {
        ele.classList.add("bg-light")
        ele.children[0].classList.replace("text-dark-emphasis", "text-dark")
    }

    function MouseLeaveStyling(ele) {
        ele.classList.remove("bg-light")
        ele.children[0].classList.replace("text-dark", "text-dark-emphasis")
    }

    function Logout() {
        const auth = {
            email: "",
            userId: "",
            isLoggedin: false
        };
        authDispatch({
            type: "USER_AUTH",
            payload: auth
        });
        addressDispatch({
            type: "USER_ADDRESS",
            payload: []
        });
        router.push("/");
    };

    return (
        <>

            <div className={`${lexend.className} d-lg-flex d-none justify-content-center align-items-center py-5`}>
                <div className="border row col-10">
                    <div className="border col-4 p-0">
                        <div className="border col-12 text-center p-4">
                            <h4 className="fw-bold m-0">My Account</h4>
                            <p className="text-dark-emphasis m-0">yashjain02.dev@gmail.com</p>
                        </div>
                        <div role="button" onMouseEnter={(e) => { MouseEnterStyling(e.currentTarget) }}
                            onMouseLeave={(e) => { MouseLeaveStyling(e.currentTarget) }}
                            onClick={() => {
                                router.push("/Account/Address");
                            }}
                            className="border col-12 px-5 py-4">
                            <h5 className="text-dark-emphasis fw-normal m-0"><i className="bi bi-geo-alt"></i> My Addresses</h5>
                        </div>
                        <div role="button" onMouseEnter={(e) => { MouseEnterStyling(e.currentTarget) }}
                            onMouseLeave={(e) => { MouseLeaveStyling(e.currentTarget) }}
                            onClick={() => {
                                router.push("/");
                            }}
                            className="border col-12 px-5 py-4">
                            <h5 className="text-dark-emphasis fw-normal m-0"><i className="bi bi-box"></i> My Orders</h5>
                        </div>
                        <div role="button" onMouseEnter={(e) => { MouseEnterStyling(e.currentTarget) }}
                            onMouseLeave={(e) => { MouseLeaveStyling(e.currentTarget) }}
                            onClick={() => {
                                router.push("/Account/Gift");
                            }}
                            className="border col-12 px-5 py-4">
                            <h5 className="text-dark-emphasis fw-normal m-0"><i className="bi bi-gift"></i> E-Gift Cards</h5>
                        </div>
                        <div role="button" onMouseEnter={(e) => { MouseEnterStyling(e.currentTarget) }}
                            onMouseLeave={(e) => { MouseLeaveStyling(e.currentTarget) }}
                            onClick={() => {
                                router.push("/Account/Privacy");
                            }}
                            className="border col-12 px-5 py-4">
                            <h5 className="text-dark-emphasis fw-normal m-0"><i className="bi bi-shield-lock"></i> Account Privacy</h5>
                        </div>
                        <div role="button" onMouseEnter={(e) => { MouseEnterStyling(e.currentTarget) }}
                            onMouseLeave={(e) => { MouseLeaveStyling(e.currentTarget) }}
                            className="border col-12 px-5 py-4">
                            <h5 className="text-dark-emphasis fw-normal m-0" onClick={Logout}>Logout</h5>
                        </div>
                    </div>
                    <div className="border col-8">
                        {content}
                    </div>
                </div>
            </div>

            <div className="d-lg-none d-flex">
                {content}
            </div>
        </>
    )
}