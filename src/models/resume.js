import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: { type: String, default: null },
    links: { type: String, default: null }
}, { timestamps: true });

export default mongoose.model('resume', resumeSchema);