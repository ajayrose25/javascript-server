import { Router } from 'express';
import TraineeController from './Controller';
import Controller from './Controller';

const traineeRouter = Router();

traineeRouter.route('/')
.get(TraineeController.create)
.post(TraineeController.list)
.delete(TraineeController.delete)
.put(TraineeController.Update);
// TraineeController.get((TraineeController.create()) => { console.log('Inside get');  });
// TraineeController.post(() => { console.log('Inside post');TraineeController.list(); });
// TraineeController.put(() => { console.log('Inside put'); TraineeController.update(); });
// TraineeController.delete(() => { console.log('Inside delete'); TraineeController.delete(); });

export default traineeRouter;