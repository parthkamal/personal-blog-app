import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import express from 'express';

dotenv.config();

export const verfiyToken = (req, res, next) => {
    //token verification middleware
    // const token =req.body.token;
    // console.log('verify token fired');
    // console.log(req.body); 
    // there is no significance of the req body in the get request we should attach the info in the headers from the client side
    // console.log(req.headers);
    // console.log(token);
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(200).json({
            message: "a token is required for authorization",
        });
    }
    try {
        const decode = jwt.decode(token, process.env.TOKEN_KEY);
        //attach the user to the req
        req.user = decode;
        console.log(decode);
        next();
    } catch (error) {
        console.log("error in decoding the token", error);
        return res.status(400).json({
            message: "invalid token",
        });
    }
    
};
