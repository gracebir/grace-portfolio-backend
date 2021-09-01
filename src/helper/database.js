import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

export default mongoose.connect(process.env.mongourl,
    {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
},()=> console.log("connected"));