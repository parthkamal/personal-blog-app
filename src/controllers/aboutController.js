import About from '../models/about.js';
import fs from 'fs';
import path from 'path';
export const aboutController = (req, res) => {
    console.log("aggaya bhaia get req par");
    About.find((err,items)=>{
        if(err){
            console.log('error in fetching from the db');
        }else{
            res.status(200).json(items);
        }
    })
}

export const aboutPOSTController = async (req, res) => {
    console.log('about post controller fired');
    console.log(req.file);
    console.log(req.body);
    //destructuring the title and description
    const {title,description}=req.body;
    //input validation
    if(!(title&&description&&req.file)){
        console.log("invalid input for about post");
        res.status(400).json({message:"invalid input for about post"})
    }else{
        console.log("reached to the right road");
        // console.log(__dirname);
        //upload from the multer disk system to the mongo database
        // console.log(req.file.filename);
        // res.status(200).json({message:"upload from the multer disk to the monogodb"});
        const obj = {
            title,
            description,
            image:{
                data: fs.readFileSync(path.join('uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        About.create(obj).then((about)=>{
            console.log(about.image);
            res.status(200).json({
                about:about,
                message:"successfully added about post to database"
            })
        }).catch((error)=>{
            console.log(error);
            res.status(400).json({message:error});
        })
    }
}