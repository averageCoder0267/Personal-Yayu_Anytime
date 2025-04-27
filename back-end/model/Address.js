import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    saveAs: {
        type: String,
        required: true
    },
    houseNo: {
        type: String,
        required: true
    },
    floor: {
        type: String
    },
    area: {
        type: String,
        required: true
    },
    landmark: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    }
});

const Address = mongoose.model("address", addressSchema);
export default Address;