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
}