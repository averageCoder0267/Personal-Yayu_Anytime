
import { Modal } from "@mantine/core"
import HeaderAddressList from "../list/headerAddressList"
import { lexend } from "@/fonts"

export default function AddressModal({ opened, close, current, currentFn }) {

    return (
        <Modal className={lexend.className} opened={opened} onClose={close} title="Saved Addresses" size="xl">
            <HeaderAddressList back={close} current={current} currentFn={currentFn} />
        </Modal >
    )
}