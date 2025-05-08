"use client"
import { AuthContext } from "@/contexts/AuthContext"
import { useContext, useState } from "react"
import { useRouter } from "next/navigation";
import { lexend, roboto } from "@/fonts";
import { useDisclosure } from "@mantine/hooks";
import AccountModal from "../modal/accountModal";

export default function AccountBox() {

    const { auth } = useContext(AuthContext);
    const router = useRouter();

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className={`${lexend.className} col-lg-1 col-sm-2 col-2 d-lg-flex d-none justify-content-center align-items-center`}
                id="accountBox" onClick={open}>
                <p className={`${roboto.className} fw-light m-0`}>
                    {(auth.isLoggedin) ? "Account" : "Login"}
                </p>
            </div >

            <div className={`col-lg-1 col-sm-2 col-2 d-lg-none d-flex justify-content-center align-items-center`}
                id="accountBox" onClick={() => {
                    if (auth.isLoggedin)
                        router.push("/Account");
                    else
                        open();
                }}>
                <p className={`${roboto.className} fw-light m-0`}>
                    {(auth.isLoggedin) ? <i className="bi bi-person-circle"></i> : "Login"}
                </p>
            </div>

            <AccountModal opened={opened} close={close} />

        </>
    )
}