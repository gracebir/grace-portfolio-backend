import express from 'express';
import router from './routes/project.route';
import resumeRouter from './routes/resume.route';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("<h1>welcome </h1>")
})

app.use('/project',router)
app.use('/resume', resumeRouter);

app.listen(port, ()=> { console.log(`server run on http://localhost:${port}`)});