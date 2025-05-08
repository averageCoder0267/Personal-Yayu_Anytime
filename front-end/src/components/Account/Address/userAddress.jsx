"use client"
import { useDisclosure } from "@mantine/hooks";
import AddressDrawer from "./drawer/addressDrawer";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "@/contexts/AddressContext";
import AddressList from "./addressList";
import { lexend } from "@/fonts";

export default function UserAddress() {

    const [current, setCurrent] = useState(-1);
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className={`${lexend.className} col-12 p-4`}>
            <h4 className="fw-semibold">My Addresses</h4>
            <button className="btn btn-sm btn-outline-success fw-semibold" onClick={() => { open(); setCurrent(-1); }}>
                <i className="bi bi-plus-lg" /> Add new address
            </button>
            <AddressList currentFn={setCurrent} openDrawer={open} />
            <AddressDrawer  opened={opened} close={close} current={current} />
        </div>
    );
}