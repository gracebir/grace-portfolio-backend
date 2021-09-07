import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()


//mongodb://127.0.0.1:27017/portfolio


mongoose.connect(process.env.mongourl,
    {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=> console.log("connected"))
.catch(err => console.error(err));

export default mongoose;