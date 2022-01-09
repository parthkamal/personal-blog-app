import express from "express";
const router=express.Router();

router.get('/signin',(req,res)=>{
    res.render('components/adminform');
});

export default router;