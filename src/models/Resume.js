import mongoose from '../helper/database';

const ResumeSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    filepath:{
        type:String,
        required:true
    },
    cloudinary_id:{type:String, required:true},
});


export default mongoose.model('resume', ResumeSchema);