import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    },
    links:{
        type:String,
        default:null,
    },
    author:{
        type:String,
        default:"parth kamal"
    }
},{timestamps:true})

export default mongoose.model('post',postSchema);