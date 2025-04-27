"use client"
import { AuthContext } from "@/contexts/AuthContext"
import { useContext, useState } from "react"
import LoginModal from "../modal/loginModal";
import AccountModal from "../modal/accountModal";
import { useRouter } from "next/navigation";

export default function AccountBox() {

    const { auth } = useContext(AuthContext);
    const router = useRouter();
    const [loginModal, setLoginModal] = useState(false);
    const [accountModal, setAccountModal] = useState(false);

    function mountLoginModal() {
        if (!auth.isLoggedin)
            setLoginModal(true);
    }
    function unMountLoginModal() {
        setLoginModal(false);
    }

    function mountAccountModal() {
        if (auth.isLoggedin)
            setAccountModal(true);
    }
    function unMountAccountModal() {
        setAccountModal(false);
    }

    function triggerAccountPage() {
        if (auth.isLoggedin)
            router.push("/Account");
    }

    return (
        <>
            <div className={`col-lg-1 col-sm-2 col-2 d-lg-flex d-none justify-content-center align-items-center`}
                id="accountBox" onClick={() => {
                    mountLoginModal();
                    mountAccountModal();
                }}>
                <p className="fw-light m-0">
                    {(auth.isLoggedin) ? "Account" : "Login"}
                </p>
            </div >

            <div className={`col-lg-1 col-sm-2 col-2 d-lg-none d-flex justify-content-center align-items-center`}
                id="accountBox" onClick={() => {
                    mountLoginModal();
                    triggerAccountPage();
                }}>
                <p className="fw-light m-0">
                    {(auth.isLoggedin) ? <i className="bi bi-person-circle"></i> : "Login"}
                </p>
            </div>

            {(loginModal && <LoginModal back={unMountLoginModal} />)}
            {(accountModal && <AccountModal back={unMountAccountModal} />)}

        </>
    )
}