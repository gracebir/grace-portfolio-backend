import mongoose from '../helper/database';

const ProjectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    techs:[{
        type: String,
        required: true,
    }],
    imageurl: {
        type: String,
        required: true
    },
    source:{
        type: String,
        required: true
    },
    demo:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date.now()
    }
});

export default (await mongoose).model("projects",ProjectSchema);