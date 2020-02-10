import { Router } from 'express';
import TraineeController from './Controller';
import  { validationHandler }  from '../../libs/routes';
import { validation } from '../../ controllers/trainee/validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import UserController from './Controller';
import { permissions } from '../../libs/routes/constants';
const userRouter: Router = Router();
// authMiddleware('trainee', 'write'),

userRouter.route('/')
.get(authMiddleware(permissions.getUsers, 'all'), validationHandler(validation.get), UserController.list)
.post(authMiddleware(permissions.getUsers, 'all'), validationHandler(validation.create), UserController.create)
.delete(authMiddleware(permissions.getUsers, 'all'), UserController.delete)
.put(authMiddleware(permissions.getUsers, 'all'), validationHandler(validation.update), UserController.Update);
userRouter.delete('/:id', validationHandler(validation.delete), UserController.delete);
userRouter.get('/:id', validationHandler(validation.get), UserController.list);

export default userRouter;



