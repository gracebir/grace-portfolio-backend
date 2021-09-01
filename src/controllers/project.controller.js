import Project from "../models/Project";
import cloudinary from "../helper/cloudinary"

async function addProject(req, res) {
    const imageurl = req.file.path;
    const { title, description, techs, source, demo} = req.body;
    if(!title | !description | !techs || !source | !demo | !imageurl) return res.status(501).json({
        msg:'please fill all field'
    });

    Project.findOne({title})
    .then((project)=> {
        if(project) return res.status(501).json({msg:'this is project is already exists'})
        let result = await cloudinary.uploader.upload(imageurl);
        const new_project = new Project({
            title: title,
            description: description,
            techs,
            imageurl:result.secure_url,
            source,
            demo,
            cloudinary_id: result.public_id

        });
         await new_project.save()
         .then(data => res.json(data));
    })
    
    
}


// update project data
async function updateProject(req, res) {
    const imageurl = req.file.path;
    const id = req.params.id;
    const { title, description, techs, source, demo} = req.body;
    let result = await cloudinary.uploader.upload(imageurl);
    Project.findOne({title})
    .then((project) => {
        if(!project) return res.status(501).json({msg: 'this project does not exist'});
        const projectUpdated = await Project.findByIdAndUpdate({_id:id},{
            title: title,
            description: description,
            techs,
            imageurl:result.secure_url,
            source,
            demo,
            cloudinary_id: result.public_id
        },{new:true});

        return res.status(200).json(projectUpdated);
    })
}

// get project data

async function getProject(req, res) {
    await Project.find()
    .sort({date:-1})
    .then((project)=> res.json(project));
}



// delete one project in our database
async function deleteProject(req, res){
    const id = req.params.id;
    const project = await Project.findByIdAndDelete({_id:id});
    return res.status(200).json(project);
}


export default {
    addProject,
    updateProject,
    getProject,
    deleteProject,
}


