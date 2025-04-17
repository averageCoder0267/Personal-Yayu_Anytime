import mongoose from "mongoose";

export default async function connectDb() {
    try {
        const connect = await mongoose.connect(process.env.Mongo_Url);
        if (connect) {
            console.log("MongoDB Connected..");
        }
    } catch (error) {
        console.log(error);
    }
}