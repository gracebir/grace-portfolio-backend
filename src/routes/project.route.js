import express from 'express';
import ProjectController from '../controllers/project.controller';
import {upload} from '../helper/helper';

const router = express.Router();

router.post('/',upload.single('imageurl'), ProjectController.addProject);


router.get('/', ProjectController.getProject);


router.put('/:id', upload.single('imageurl'), ProjectController.updateProject);


router.delete('/:id', ProjectController.deleteProject);


export default router;