import { Router } from 'express';
import TraineeController from './Controller';
import  { validationHandler }  from '../../libs/routes';
import { validation } from './validation';
import Controller from './Controller';
const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(validation.get), TraineeController.create)
.post(validationHandler(validation.create), TraineeController.list)
.delete(TraineeController.delete)
.put(validationHandler(validation.update), TraineeController.Update);
traineeRouter.delete('/:id', validationHandler(validation.delete), TraineeController.delete);
// traineeRouter.post('/:var', validationHandler(validation.create), TraineeController.list);
// TraineeController.get((TraineeController.create()) => { console.log('Inside get');  });
// TraineeController.post(() => { console.log('Inside post');TraineeController.list(); });
// TraineeController.put(() => { console.log('Inside put'); TraineeController.update(); });
// TraineeController.delete(() => { console.log('Inside delete'); TraineeController.delete(); });

export default traineeRouter;