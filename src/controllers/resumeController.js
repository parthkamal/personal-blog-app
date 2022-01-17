import Resume from "../models/resume.js";
export const resumeController = (req, res) => {

    Resume.find((err, resumes) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: err });
        }
        if (resumes) {
            console.log(resumes)
            res.status(200).json(resumes);
        }
    }) 
}

export const resumePOSTController =  async(req, res) => {
    try {
        console.log('fire hua kuch');
        //we are not getting the post the error might be cors policy iguess
        const { title, links,description} = req.body;
        console.log(req.body,title)
        if (!(title && links)) {
            res.status(200).json({ message: "invalid resume post request" });
        } else {
            const obj = {
                title, description,links
            }
            Resume.create(obj).then((resume) => {
                console.log(resume);
                res.status(200).json({
                    resume: resume,
                    message: "successfully added resume post to database"
                })
            }).catch((error) => {
                console.log(err);
                res.status(400).json({ message: error });
            })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err });
    }
}

export const resumePUTController = async (req,res)=>{
    console.log('resume put controller fired');
    const {_id,title,description,links}= req.body;
    console.log(req.body);
    if(!(title && description && _id && links)){
        res.status(200).json({
            message: 'invalid edit resume request',
        })
    }else{
        const obj = {
            title,description,links
        };
        Resume.findByIdAndUpdate(_id,obj).then((result)=>{
            res.status(200).json({
                reume: result,
                message: 'ye lo tmhari edited post',
            })
        }).catch((error)=>{
            console.log(error);
            res.status(200).json({ message: error });
        })
    }
}

export const resumeDELETEController = async (req,res)=>{
    const json = JSON.parse(req.body.json);
    const {id } = json;
    if(!id){
        res.status(200).json({
            message:'please attach the id for deletion',
        })
    }else{
        Resume.findByIdAndDelete(id).then((result)=>{
            res.status(200).json({
                result:result,
                message:'deletion of the resume successful'
            })
        }).catch((error)=>{
            res.status(200).json({
                error:error,message:'error deleting the post',
            })
        })
    }
}