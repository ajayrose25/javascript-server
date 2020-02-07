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
.get(authMiddleware(permissions.getUsers, 'read'), validationHandler(validation.get), UserController.create)
.post(validationHandler(validation.create), UserController.list)
.delete(UserController.delete)
.put(validationHandler(validation.update), UserController.Update);
userRouter.delete('/:id', validationHandler(validation.delete), UserController.delete);
// traineeRouter.post('/:var', validationHandler(validation.create), TraineeController.list);
// TraineeController.get((TraineeController.create()) => { console.log('Inside get');  });
// TraineeController.post(() => { console.log('Inside post');TraineeController.list(); });
// TraineeController.put(() => { console.log('Inside put'); TraineeController.update(); });
// TraineeController.delete(() => { console.log('Inside delete'); TraineeController.delete(); });

export default userRouter;



