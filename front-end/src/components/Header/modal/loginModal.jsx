"use client"
import { AddressContext } from "@/contexts/AddressContext";
import { AuthContext } from "@/contexts/AuthContext";
import AddUser from "@/hooks/AddUser";
import GenerateRandom from "@/hooks/GenerateRandom";
import GetUserAddress from "@/hooks/GetUserAddress";
import SendMail from "@/hooks/SendMail";
import { Input } from "@mantine/core"
import { useContext, useEffect, useRef, useState } from "react"

export default function LoginModal({ back }) {

    const { authDispatch } = useContext(AuthContext);
    const { addressDispatch } = useContext(AddressContext);

    const emailRef = useRef();
    const codeRef = useRef();
    const loginRef = useRef();
    const [randomCode, setRandomCode] = useState(0);

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");

    useEffect(() => {
        codeRef.current.style.display = "none";
    }, []);

    async function submitHandler() {
        if (loginRef.current.textContent == "Continue") {
            if (emailRef.current.value == "" || !emailRef.current.value.includes("@gmail.com"))
                return;
            const random = GenerateRandom();
            setRandomCode(random);
            emailRef.current.disabled = "true";
            // SendMail(emailRef.current.value, random);
            alert(random);
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
                back();
            } else
                codeRef.current.value = "";
        }
    }

    return (
        <section style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            className={`position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}>
            <div className="bg-light col-lg-6 col-sm-9 col-11 rounded-5 d-flex flex-column align-items-center px-3 py-3">
                <div className="col-12 px-2">
                    <i className="bi bi-arrow-left fs-4" onClick={back} role="button"></i>
                </div>
                <div role="button" className="bg-warning col-lg-5 col-sm-6 col-7 rounded d-flex justify-content-center align-items-center p-3">
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
        </section>
    )
}
