import Address from "../model/Address.js";

export const getUserAddress = async (req, res) => {
    try {
        const { userId } = req.query;
        const address = await Address.find({ userId });
        res.status(200).send({ msg: "Getting User's Address", address });
    } catch (error) {
        console.log(error);
    }
}

export const addUserAddress = async (req, res) => {
    try {
        const { userId } = req.body;
        const toBeAdded = new Address({ ...req.body });
        await toBeAdded.save();
        const address = await Address.find({ userId });
        res.status(200).send({ msg: "Address Added", address });
    } catch (error) {
        console.log(error);
    }
}

export const updateUserAddress = async (req, res) => {
    try {
        const { addressId } = req.query;
        await Address.findByIdAndUpdate(addressId, req.body);
        res.status(200).send("Address Updated");
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserAddress = async (req, res) => {
    try {
        const { addressId } = req.query;
        await Address.findByIdAndDelete(addressId);
        res.status(200).send("Address Deleted");
    } catch (error) {
        console.log(error);
    }
}
