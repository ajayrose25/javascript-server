import { Request, Response, NextFunction } from 'express';

class TraineeController {
    static instance;
    static getInstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    create = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Create Trainee:::::::');
        const createObj = {
            status: 'Ok',
            message: 'Trainee added',
            details: [{
                id: 1,
                name: 'Ajay',
                address: 'Rohtak',
            }]
        };
        res.send(createObj);
    };
    list = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::list Trainee:::::::');
        const listobj = {
            status: 'Ok',
            message: 'Trainee added',
            details: [{
                id: 2,
                name: 'Rahul',
                address: 'Shahdra',
            }]
        };
        res.send(listobj);
    };
    Update = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Update Trainee:::::::');
        const updateobj = {
            status: 'Ok',
            message: 'Trainee Updated',
            details: [{
                id: 3,
                name: 'Shivam',
                address: 'Karol Bagh'
            }]
        };
        res.send(updateobj);
    };
    delete = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Delete Trainee:::::::');
        const deleteobj = {
            status: 'Ok',
            message: 'Trainee deleted',
            details: [{
                id: 4,
                name: 'permil',
                address: 'Rohini',
            }]
        };
        res.send(deleteobj);
    };
}
export default TraineeController.getInstance();

