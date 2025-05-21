import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imagePoster: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    shelfLife: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        default: "I'll update it later",
        required: true
    },
    keywords: {
        type: Array,
        default: [],
        required: true
    }
})

const Product = mongoose.model("product", productSchema);
export default Product;