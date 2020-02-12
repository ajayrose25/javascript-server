import { Router } from 'express';
import TraineeController from './Controller';
import  { validationHandler }  from '../../libs/routes';
import { validation } from './validation';
import authMiddleware from '../../libs/routes/authMiddleware';
import Controller from './Controller';
import { permissions } from '../../libs/routes/constants';
const traineeRouter: Router = Router();
// authMiddleware('trainee', 'write'),

traineeRouter.route('/')
.get(authMiddleware(permissions.getUsers, 'read'), validationHandler(validation.get), TraineeController.create)
.post(authMiddleware(permissions.getUsers, 'write'), validationHandler(validation.create), TraineeController.list)
.delete(authMiddleware(permissions.getUsers, 'read'), TraineeController.delete)
.put(authMiddleware(permissions.getUsers, 'write'), validationHandler(validation.update), TraineeController.Update);
traineeRouter.delete('/:id', validationHandler(validation.delete), TraineeController.delete);
// traineeRouter.post('/:var', validationHandler(validation.create), TraineeController.list);
// TraineeController.get((TraineeController.create()) => { console.log('Inside get');  });
// TraineeController.post(() => { console.log('Inside post');TraineeController.list(); });
// TraineeController.put(() => { console.log('Inside put'); TraineeController.update(); });
// TraineeController.delete(() => { console.log('Inside delete'); TraineeController.delete(); });

export default traineeRouter;



