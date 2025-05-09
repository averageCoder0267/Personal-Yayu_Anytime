import Product from "../model/Product.js";

export const getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        const products = await Product.find({ category });
        res.status(200).send({ msg: "Getting Products By Category", products });
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = async (req, res) => {
    try {
        const toBeAdded = new Product(req.body);
        await toBeAdded.save();
        res.status(200).send(`Product Added in ${req.body.category}`);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.query;
        await Product.findByIdAndUpdate(id, req.body);
        res.status(200).send("Product Updated Successfully");
    } catch (error) {
        console.log(error);
    }
}