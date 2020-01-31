import  traineeRouter  from './ controllers/trainee/index';
import { Router } from 'express';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);

export default mainRouter;

