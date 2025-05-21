"use client"
import { AddressContext } from "@/contexts/AddressContext";
import { AuthContext } from "@/contexts/AuthContext";
import { lexend } from "@/fonts";
import AddUser from "@/hooks/AddUser";
import GenerateRandom from "@/hooks/GenerateRandom";
import GetUserAddress from "@/hooks/GetUserAddress";
import SendMail from "@/hooks/SendMail";
import { Input, Modal } from "@mantine/core"
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react"

export default function AccountModal({ opened, close }) {

    const { auth, authDispatch } = useContext(AuthContext);
    const { addressDispatch } = useContext(AddressContext);

    const emailRef = useRef();
    const codeRef = useRef();
    const loginRef = useRef();
    const [randomCode, setRandomCode] = useState(0);
    const [codeInput, setCodeInput] = useState("none");

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    function resetLogin() {
        codeRef.current.style.display = "none";
        loginRef.current.disabled = "false";
        loginRef.current.textContent = "Continue";
        setEmail("");
        setCode("");
        setCodeInput("none");
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
    };

    async function submitHandler() {
        if (loginRef.current.textContent == "Continue") {
            if (emailRef.current.value == "" || !emailRef.current.value.includes("@gmail.com"))
                return;
            const random = GenerateRandom();
            setRandomCode(random);
            emailRef.current.disabled = "true";
            // SendMail(emailRef.current.value, random);
            alert(random);
            setCodeInput("block");
            codeRef.current.style.display = "block";
            loginRef.current.disabled = "true";
            loginRef.current.textContent = "Login";
        } else {
            if (codeRef.current.value == randomCode) {
                const userId = await AddUser(emailRef.current.value);
                const address = await GetUserAddress(userId);
                const auth = {
                    email: emailRef.current.value,
                    userId,
                    isLoggedin: true
                }
                window.localStorage.setItem("YayuAnytime", JSON.stringify({ auth }));
                authDispatch({
                    type: "USER_AUTH",
                    payload: auth
                });
                addressDispatch({
                    type: "USER_ADDRESS",
                    payload: address
                });
                close();
                resetLogin();
            } else
                codeRef.current.value = "";
        }
    }

    return (
        <>
            {
                (auth.isLoggedin)
                    ?
                    <Modal className={lexend.className} radius={"lg"} opened={opened} title="My Account" onClose={() => {
                        close();
                    }} size="xl">
                        <div className="bg-light rounded-5 p-3">
                            <div>
                                <h3>My Account</h3>
                            </div>
                            <p className="text-primary-emphasis m-0">{auth?.email}</p>
                            <div className="mt-3">
                                <h6 className="fw-normal fs-5 m-0 py-3">
                                    <Link href="/" onClick={close}
                                        className="text-dark text-decoration-none">
                                        <i className="bi bi-box pe-2" /> My Orders
                                    </Link>
                                </h6>
                                <h6 className="fw-normal fs-5 m-0 py-3">
                                    <Link href="/Account/Address" onClick={close}
                                        className="text-dark text-decoration-none">
                                        <i className="bi bi-geo-alt pe-2" /> Saved Addresses
                                    </Link>
                                </h6>
                                <h6 className="fw-normal fs-5 m-0 py-3">
                                    <Link href="/Account/Gift" onClick={close}
                                        className="text-dark text-decoration-none">
                                        <i className="bi bi-gift pe-2" /> E-Gift Cards
                                    </Link>
                                </h6>
                                <h6 className="fw-normal fs-5 m-0 py-3">
                                    <Link href="/Account/Privacy" onClick={close}
                                        className="text-dark text-decoration-none">
                                        <i className="bi bi-shield-lock pe-2" /> Account Privacy
                                    </Link>
                                </h6>
                                <h6 className="fw-normal fs-5 m-0 pt-3">
                                    <Link href="/" onClick={() => {
                                        close();
                                        Logout();
                                    }}
                                        className="text-dark text-decoration-none">
                                        <i className="bi bi-shield-lock pe-2" /> Logout
                                    </Link>
                                </h6>
                            </div>
                        </div>
                    </Modal>
                    :
                    <Modal className={lexend.className} radius={"lg"} opened={opened} onClose={() => {
                        close();
                        resetLogin();
                    }} size="xl">
                        <div className="bg-light rounded-5 d-flex flex-column align-items-center px-3 py-3">
                            <div role="button" className="bg-warning col-lg-5 col-sm-6 col-8 rounded d-flex justify-content-center align-items-center p-3">
                                <h3 className="text-dark fw-bold m-0">Yayu</h3>
                                <h3 className="text-success fw-bold m-0">Anytime</h3>
                            </div>
                            <div className="col-12 mt-3">
                                <h2 className="text-center fw-bold">India's last minute app</h2>
                            </div>
                            <div className="col-12 m-0">
                                <p className="text-center">Log in or Sign up</p>
                            </div>
                            <form className="col-12" onSubmit={(e) => { e.preventDefault() }}>
                                <div className="col-12 d-flex justify-content-center align-items-center m-0">
                                    <Input
                                        ref={emailRef}
                                        required
                                        placeholder="Enter your email"
                                        defaultValue={email}
                                        type="email"
                                        onBlur={(event) => setEmail(event.target.value)}
                                        radius="md"
                                        size="md"
                                        className="col-sm-8 col-12"
                                    />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-center m-0">
                                    <Input
                                        ref={codeRef}
                                        placeholder="Enter Verification Code"
                                        value={code}
                                        type="number"
                                        onChange={(event) => {
                                            setCode(event.target.value)
                                            if (event.target.value.length == 6)
                                                loginRef.current.disabled = false;
                                            else
                                                loginRef.current.disabled = "true";
                                        }}
                                        min={0}
                                        radius="md"
                                        size="md"
                                        mt="10"
                                        display={codeInput}
                                        className="col-sm-8 col-12"
                                    />
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                                    <button ref={loginRef} className="btn btn-success col-lg-4 col-sm-6 col-8"
                                        type="submit" onClick={submitHandler}>Continue</button>
                                </div>
                            </form>
                            <div style={{ fontSize: "11px" }} className="col-12 d-flex justify-content-center align-items-center mt-3">
                                <p className="text-center col-12">
                                    By continuing, you agree to our
                                    <u role="button">Terms of service</u> & <u role="button">Privacy policy</u>
                                </p>
                            </div>
                        </div>
                    </Modal>
            }
        </>
    )
};