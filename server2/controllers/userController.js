const User = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const {  name, email } = req.body;

        // Validate required fields
        if (!name || !email) {
            return sendResponse(res, 400, "Bad Request", null, "Missing required fields");
        }

        
        const res = await User.create({
            name,
            email
        });
        sendResponse(res, 201, {message: "user created successfully"});

    } catch (error) {
        sendResponse(res, 500, "Internal Server Error", null, error.message);
    }
};

module.exports = {  createUser };