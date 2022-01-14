import mongoose from 'mongoose';
const aboutSchema = new mongoose.Schema({
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
    author:{
        type:String,
        default:'parth kamal'
    }
},{timestamps:true})

export default mongoose.model('about',aboutSchema);