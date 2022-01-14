import express from "express";
import { adminAuthLogin, adminAuthRegister } from "../controllers/adminAuth.js";
import { aboutController,aboutPOSTController } from "../controllers/aboutController.js";
import { contactController,contactPOSTController } from "../controllers/contactController.js";
import { postController ,postPOSTController} from "../controllers/postController.js";
import { projectController ,projectPOSTController} from "../controllers/projectConroller.js";
import { resumeController,resumePOSTController} from "../controllers/resumeController.js";
const router = express.Router();


//get request
router.get('/about',aboutController);
router.get('/posts',postController);
router.get('/projects',projectController);
router.get('/contact',contactController);
router.get('/resume',resumeController);

//post request
router.post('/about',aboutPOSTController);
router.post('/posts',postPOSTController);
router.post('/projects',projectPOSTController);
router.post('/contact',contactPOSTController);
router.post('/resume',resumePOSTController);


export default router;