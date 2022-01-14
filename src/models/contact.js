import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    title: { type: String },
    link: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('contact', contactSchema);