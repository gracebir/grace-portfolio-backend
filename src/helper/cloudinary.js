import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config()


let cloud = cloudinary.v2;

cloud.config({
    cloud_name: process.env.name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
})

export default cloud;