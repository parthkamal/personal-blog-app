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
        console.log("reached to the right road");
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
