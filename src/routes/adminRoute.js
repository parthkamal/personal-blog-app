import express from "express";
import { adminAuthRegister } from "../controllers/adminAuth.js";
const router=express.Router();


router.post('/register',adminAuthRegister);

router.get('/signin',(req,res)=>{
    res.render('components/adminform');
});

export default router;