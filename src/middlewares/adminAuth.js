import express from "express";
import bcrypt from "bcryptjs";
import Admin from "../models/admin.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export const adminAuthRegister = async (req, res) => {
    try {
        //register the admin here
        const { first_name, last_name, email, password } = req.body; //destructuring the request.body object
        console.log(req.body);

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
        await bcrypt.genSalt(Number(process.env.SALT_ROUNDS), (err, salt) => {
            if (salt) {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (hash) encryptedPassword = hash;
                    if (err) console.log("error in hashing the password", err);
                });
            }
            if (err) {
                console.log("error in genearting salt", err);
            }
        });

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

                return res.status(200).json(admin);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({ message: "error in creating the user" }); });
  } catch (err) {
    console.error(err);
}
};

export const adminAuthLogin = async (req, res) => {
    
 };
