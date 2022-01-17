import express from "express";
import { adminAuthLogin, adminAuthRegister } from "../controllers/adminAuth.js";
import { aboutController,aboutPOSTController, aboutPUTController } from "../controllers/aboutController.js";
import { contactController,contactPOSTController, contactPUTController } from "../controllers/contactController.js";
import { postController ,postDELETEController,postPOSTController, postPUTController} from "../controllers/postController.js";
import { projectController ,projectPOSTController, projectPUTController} from "../controllers/projectConroller.js";
import { resumeController,resumePOSTController, resumePUTController} from "../controllers/resumeController.js";
import editRoute from './adminEditRoute.js'
import multer from "multer";
import { verfiyToken } from "../middlewares/adminAuth.js";
const router=express.Router();

//edit router for editing any thing
router.use('/edit',editRoute);

//verify token middleware 
router.get('/',verfiyToken,(req,res)=>{
    console.log('hello madarchod');
     return res.status(200).json({
        "message":"welcome admin",
        user:req.user,
    })
});

// creating the disk system engine for the multer 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
});

//upload handler for the image
const upload = multer({ storage: storage });

//get request
router.get('/about',aboutController);
router.get('/posts',postController);
router.get('/projects',projectController);
router.get('/contact',contactController);
router.get('/resume',resumeController);

//post request
router.post('/login',adminAuthLogin);
router.post('/register',adminAuthRegister);
router.post('/about',upload.single('file'),aboutPOSTController);
router.post('/posts',upload.single('file'),postPOSTController);
router.post('/projects',projectPOSTController);
router.post('/contact',contactPOSTController);
router.post('/resume',resumePOSTController);

//put request
router.put('/about',upload.single('file'),aboutPUTController);
router.put('/posts',upload.single('file'),postPUTController);
router.put('/projects',projectPUTController);
router.put('/contact',contactPUTController);
router.put('/resume',resumePUTController);

// delete request 
router.delete('/posts',postDELETEController);

export default router;