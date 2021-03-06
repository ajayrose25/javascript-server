import  traineeRouter  from './ controllers/trainee';
import { Router } from 'express';
import { userRouter } from './ controllers/user/index'; 

const router: Router = Router();
router.use('/trainee', traineeRouter);
router.use('/user', userRouter);

export default router;


