import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:[{type:String}],
    links:{
        type:String,
        default:''
    }
},{timestamps:true});

export default mongoose.model('resume',resumeSchema);