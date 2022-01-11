import express from "express";
import { adminAuthLogin, adminAuthRegister } from "../controllers/adminAuth.js";
import { verfiyToken } from "../middlewares/adminAuth.js";
const router=express.Router();


router.post('/register',adminAuthRegister);

router.post('/login',adminAuthLogin);

router.get('/',verfiyToken,(req,res)=>{
    res.status(200).json({
        "message":"welcome admin",
        user:req.user,
    })
})

export default router;