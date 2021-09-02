import express from 'express';
import router from './routes/project.route';
import cors from 'cors';

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use('/project',router)

app.listen(port, ()=> { console.log(`server run on http://localhost:${port}`)});