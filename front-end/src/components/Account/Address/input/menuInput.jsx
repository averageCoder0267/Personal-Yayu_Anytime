import { AddressContext } from "@/contexts/AddressContext";
import DeleteUserAddress from "@/hooks/DeleteUserAddress";
import { Menu } from "@mantine/core";
import { useContext } from "react";

export default function MenuInput({ current, currentFn, openDrawer, deleteAddressFn }) {

    const { address, addressDispatch } = useContext(AddressContext);

    function deleteHandler() {
        const addressId = address[current]._id;
        deleteAddressFn(addressId);
        const newAddress = address.filter((ele, i) => {
            if (i != current)
                return ele;
        })
        currentFn(-1);
        addressDispatch({
            type: "USER_ADDRESS",
            payload: newAddress
        });
    }

    return (
        <Menu position="left">
            <Menu.Target>
                <button className="btn" onClick={() => currentFn(current)}><i className="bi bi-three-dots-vertical" /></button>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item children="Edit" onClick={() => openDrawer()} />
                <Menu.Item children="Delete" onClick={() => deleteHandler()} />
            </Menu.Dropdown>
        </Menu>
    )
}