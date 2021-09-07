import Resume from "../models/Resume";
import cloudinary from "../helper/cloudinary"

async function saveResume(req, res){
    const {name} = req.body;
    const resume = req.file.path;
    const result = await cloudinary.uploader.upload(resume);

    const new_resume = new Resume({
        name,
        filepath: result.secure_url,
        cloudinary_id: result.public_id
    });

    new_resume.save()
    .then((resum) => res.json(resum))
    .catch((err) =>console.log(err));
}



async function getResume(req, res){
    const resume = await Resume.find();
    return res.json(resume);
}



async function deleteResume(req, res){
    const id = req.params.id;
    Resume.findByIdAndDelete({_id:id}).then((data)=> res.json(data));
}

export default {
    saveResume,
    getResume,
    deleteResume,
}