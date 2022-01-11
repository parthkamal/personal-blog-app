import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

export const verfiyToken =(req,res,next)=>{
    //token verification middleware
    const token = req.body.token||req.query.token||req.headers["x-access-token"]||req.headers.authorization[1];
    if(!token){
        return res.status(400).json({
            "message":"a token is required for authorization",
        })
    }
    try {
        const decode=jwt.decode(token,process.env.TOKEN_KEY);
        //attach the user to the req
        req.user= decode;
        console.log(decode);   
    } catch (error) {
        console.log("error in decoding the token",error);
        return res.status(400).json({
            "message":"invalid token",
        })
    }
    return next();
}


