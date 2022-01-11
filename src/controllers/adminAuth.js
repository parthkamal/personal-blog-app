import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const adminAuthRegister = async (req, res) => {
    try {
        //register the admin here
        const { first_name, last_name, email, password } = req.body; //destructuring the request.body object

        //validating the user input this can also be implemented with express validator but for now lets do the simple way
        if (!(email && password && first_name && last_name)) {
            return res.status(400).json({ message: "all input are required" });
        }
        //check if the admin already exists
        const oldAdmin = await Admin.findOne({ email });

        if (oldAdmin)
            return res
                .status(409)
                .json({ message: "admin already registered please login" });
        //now if the user is not registered if will registered it with hashing its password
        let encryptedPassword;
        console.log("encrypted password");
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
        console.log("salt", salt);
        await bcrypt
            .hash(password, salt)
            .then((hash) => {
                encryptedPassword = hash;
            })
            .catch((err) => {
                console.log("error in hashing the password", err);
            });
        console.log("hashed password", encryptedPassword);

        //creating the admin in the database
        const admin = Admin.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })
            .then((admin) => {
                //creating the token for the registered admin
                const token = jwt.sign(
                    { admin_id: admin._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                //attaching token to the created admin
                admin.token = token;

                console.log(admin);
                //return the user with the token attached to it

                return res.status(200).json({
                    user: { admin },
                    message: "successfully registered",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ message: "error in creating the user" });
            });
    } catch (err) {
        console.error(err);
    }
};

export const adminAuthLogin = async (req, res) => {
    //login of the admin
    try {
        const { email, password } = req.body; //destructuring the email and password from the req body
        //user input validation
        if (!(email && password)) {
            return res.status(400).json({ message: "all input is required" });
        }
        //check if the admin exists in the database
        const admin = await Admin.findOne({ email });
        console.log(admin);
        if (admin && (await bcrypt.compare(password, admin.password))) {
            // Create token
            const token = jwt.sign(
                { admin_id: admin._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            admin.token = token;

            // user
            res.status(200).json(admin);
        }
        //if thhet user does not exist
    } catch (error) {
        console.error("error in login ", error);
    }
};
