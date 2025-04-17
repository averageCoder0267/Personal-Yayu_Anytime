import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ msg: "Getting All Users", users });
    } catch (error) {
        console.log(error);
    }
}

export const addUser = async (req, res) => {
    try {
        const { email } = req.query;
        const user = await User.findOne({ email });
        if (user == null) {
            const toBeAdded = new User({ email });
            await toBeAdded.save();
            const newUser = await User.findOne({ email });
            res.send(200).send({ msg: "Adding User", userId: newUser._id })
        } else {
            res.status(200).send({ msg: "Get User", userId: user._id });
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany();
        res.send("All users deleted");
    } catch (error) {
        console.log(error);
    }
}