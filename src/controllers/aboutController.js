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


//controller for the put request
export const aboutPUTController = async (req,res)=>{
    const {title,description,id}=req.body;
    if(!(title,description,id)){
        res.status(200).json({
            message: 'invalid edit post request',
        })
    }else{
         const obj = {
            title, description,
            image: {
                data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
                contentType: "image/png",
            },
        };
        About.findByIdAndUpdate(id, obj).then((post) => {
            res.status(200).json({
                post: post,
                message: 'ye lo tmhari edited post',
            })
        }).catch((error) => {
            console.log(error);
            res.status(200).json({ message: err });
        });
    }

}

export const aboutDELETEController = async (req,res)=>{
    const json = JSON.parse(req.body.json);
    const{id}=json;
    if(!id){
        res.status(200).json({
            message:'please attach the id for deletion'
        })
    }else{
        About.findByIdAndDelete(id).then((result)=>{
            res.status(200).json({
                result:result,
                message:'deletion of the post successful',
            })
        }).catch((error)=>{
            console.log(error);
            res.status(200).json({
                error:error,
                message:'error in deleting the post'
            })
        })
    }
}