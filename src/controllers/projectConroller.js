import Project from '../models/projects.js';
export const projectController = (req, res) => {

    Project.find((err, projects) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: err });
        }
        if (projects) {
            console.log(projects)
            res.status(200).json(projects);
        }
    }) 
}

export const projectPOSTController =  async(req, res) => {
    try {
        console.log('fire hua kuch');
        //we are not getting the post the error might be cors policy iguess
        const { title, link ,description} = req.body;
        console.log(req.body,title)
        if (!(title && link)) {
            res.status(200).json({ message: "invalid project post request" });
        } else {
            const obj = {
                title, description,link
            }
            Project.create(obj).then((project) => {
                console.log(project);
                res.status(200).json({
                    project: project,
                    message: "successfully added project post to database"
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