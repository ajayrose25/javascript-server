import  traineeRouter  from './ controllers/trainee';
import { Router } from 'express';

const router: Router = Router();
router.use('/trainee', traineeRouter);

export default router;

