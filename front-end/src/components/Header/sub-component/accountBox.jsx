"use client"
import { User } from "@/contexts/UserContext"
import { useContext, useState } from "react"
import LoginModal from "../modal/loginModal";

export default function AccountBox() {

    const { user } = useContext(User);
    const [loginModal, setLoginModal] = useState(false);
    const [accountModal, setAccountModal] = useState(false);

    function mountLoginModal() {
        if (!user.isLoggedin) {
            setLoginModal(true);
        }
    }
    function unMountLoginModal() {
        setLoginModal(false);
    }

    function mountAccountModal() {
        setAccountModal(true);
    }

    return (
        <>
            <div className={`col-lg-1 col-sm-2 col-2 d-lg-flex d-none justify-content-center align-items-center`}
                id="accountBox" onClick={mountLoginModal}>
                <p className="fw-light m-0">
                    {(user.isLoggedin) ? "Account" : "Login"}
                </p>
            </div>

            <div className={`col-lg-1 col-sm-2 col-2 d-lg-none d-flex justify-content-center align-items-center`}
                id="accountBox" onClick={mountLoginModal}>
                <p className="fw-light m-0">
                    {(user.isLoggedin) ? <i className="bi bi-person-circle"></i> : "Login"}
                </p>
            </div>

            {(loginModal && <LoginModal back={unMountLoginModal} />)}
            {(accountModal && "")}

        </>
    )
}