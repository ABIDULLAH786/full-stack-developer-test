const UserModel = require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.allUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find({}).exec()
        res.json(users)
    } catch (err) {
        res.status(400).send("Error Occured while fetching data");
    }
}
module.exports.loginUser = async (req, res, next) => {
    /**
     * this will return user id or false
     * if user_id returned then it will validate and genrate token
     * otherwise error code will send to client 
     */

    let isfound = await authenticate(req);
    if (isfound) {
        const accessToken = jwt.sign(
            { id: isfound },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: process.env.JWT_EXPIRES_TIME
            }
        );

        res.status(202).json({ accessToken, id: isfound, message: "Login Done" })
    }
    else
        res.status(404).json({ message: "Invalid Data Entered" })
}
async function authenticate(req) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email.trim() });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return user._id;
        }
    } else {
        return false;
    }

}

module.exports.newUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const find = await UserModel.find({ email: email.trim() })
        if (find.length != 0) {
            return res.status(200).send("user with this email already exist")
        }
        const userCreated = await UserModel.create(
            {
                name: name.trim(),
                email: email.trim(),
                password: password
            });
        if (!userCreated) {
            return res.status(401).send(err);
        }
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRES_TIME
        })

        if (userCreated)
            res.status(201).json({
                message: "Account successfully created",
                token: token
            })



    } catch (err) {
        res.status(400).send("Error Occured while registration")
    }
}