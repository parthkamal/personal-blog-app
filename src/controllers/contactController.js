import Contact from "../models/contact.js";
export const contactController = (req, res) => {

    Contact.find((err, contacts) => {
        if (err) {
            console.log(err);
            res.status(400).json({ message: err });
        }
        if (contacts) {
            console.log(contacts)
            res.status(200).json(contacts);
        }
    }) 
}

export const contactPOSTController =  async(req, res) => {
    try {
        console.log('fire hua kuch');
        //we are not getting the post the error might be cors policy iguess
        const { title, link } = req.body;
        console.log(req.body,title)
        if (!(title && link)) {
            res.status(200).json({ message: "invalid contact post request" });
        } else {
            const obj = {
                title, link
            }
            Contact.create(obj).then((contact) => {
                console.log(contact);
                res.status(200).json({
                    contact: contact,
                    message: "successfully added contact post to database"
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

export const contactPUTController = async (req,res)=>{
    console.log('contact put controller fired');
    
}