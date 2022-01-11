import express from "express";
import { adminAuthRegister } from "../middlewares/adminAuth.js";
const router=express.Router();


router.post('/register',adminAuthRegister);

router.get('/signin',(req,res)=>{
    res.render('components/adminform');
});

export default router;