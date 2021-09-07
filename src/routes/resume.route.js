import { Router } from 'express';
import { uploadPdf } from '../helper/helper';
import ResumeController from '../controllers/resumeController';

const route = Router();

route.post('/', uploadPdf.single('filepath'), ResumeController.saveResume);


route.get('/', ResumeController.getResume);


route.delete('/:id', ResumeController.deleteResume);

export default route;



