import mongoose from 'mongoose';

const projecSchema = new mongoose.Schema({
    title:{
        type:String,
        default:null
    },
    description:{type:String,default:null},
    link:{type:String,default:null}
},{timestamps:true});

export default mongoose.model('project',projecSchema);