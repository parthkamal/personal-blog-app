import Post from "../models/post.js";
import fs from 'fs';
import path from 'path';

export const postController = (req, res) => {
    Post.find((err, items) => {
        if (err) {
            console.log("error in fetching from the db");
        } else {
            res.status(200).json(items);
        }
    });
};


export const postPOSTController = async (req, res) => {
    console.log("about controller is running");
    //destructuring the title and description
    const { title, description, links } = req.body;
    console.log(req.body);
    //input validation
    if (!(title && description && req.file && links)) {
        console.log("invalid input for about post");
        res.status(400).json({ message: "invalid input for about post" });
    } else {
        // console.log(__dirname);
        //upload from the multer disk system to the mongo database
        // console.log(req.file.filename);
        // res.status(200).json({message:"upload from the multer disk to the monogodb"});
        const obj = {
            title,
            description,
            links,
            image: {
                data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
                contentType: "image/png",
            },

        };
        Post.create(obj)
            .then((post) => {
                console.log(post.image);
                res.status(200).json({
                    post: post,
                    message: "successfully added about post to database",
                });
            })
            .catch((error) => {
                console.log(error);
                res.status(400).json({ message: error });
            });
    }
};


export const postPUTController = async (req, res) => {
    console.log('post PUT controller fired');
    // console.log(req.body);
    const { title, description, links, id } = req.body;
    console.log(id);
    console.log(req.file);
    console.log(description);
    console.log(links);
    console.log(title);
    //req params validation
    if (!(title && description && id && links && req.file)) {
        res.status(200).json({
            message: 'invalid edit post request',
        })
    } else {
        //object preparation
        const obj = {
            title, description, links,
            image: {
                data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
                contentType: "image/png",
            },
        };
        Post.findByIdAndUpdate(id, obj).then((post) => {
            res.status(200).json({
                post: post,
                message: 'ye lo tmhari edited post',
            })
        }).catch((error) => {
            console.log(error);
            res.status(200).json({ message: err });
        });
    }
};

export const postDELETEController = async (req,res)=>{
    console.log('delete post controller fired');
    // console.log(req.body);
    const json = JSON.parse(req.body.json);
    // console.log(json);
    // console.log(id);
    const {id}= json;
    console.log(id);
    //req params validation 
    if(!id){
        res.status(200).json({
            message:'please attach the id for deletion'
        })
    }else{
        //delete operation for the request
        Post.findByIdAndDelete(id).then((result)=>{
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
