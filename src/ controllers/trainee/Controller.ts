import { Request, Response } from 'express';

class TraineeController {
    static instance;
    static getInstance = () => {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
create = (req: Request, res: Response ) => {
    console.log(':::::::Create Trainee:::::::');
    res.send({
        status: 'Ok',
        message: 'Trainee added',
        details: [{
        id: 1,
        name: 'Ajay',
        address: 'Rohtak',
}]
});
}
list = (req: Request, res: Response ) => {
    console.log(':::::::list Trainee:::::::');
    res.send({
        status: 'Ok',
        message: 'Trainee added',
        details: [{
        id: 2,
        name: 'Rahul',
        address: 'Shahdra',
}]
});
}
Update = (req: Request, res: Response ) => {
    console.log(':::::::Update Trainee:::::::');
    res.send({
        status: 'Ok',
        message: 'Trainee Updated',
        details: [{
        id: 3,
        name: 'Shivam',
        address: 'Karol Bagh'
}]
});
}
delete = (req: Request, res: Response ) => {
    console.log(':::::::Delete Trainee:::::::');
    res.send({
        status: 'Ok',
        message: 'Trainee added',
        details: [{
        id: 4,
        name: 'permil',
        address: 'Rohini',
}]
});
}
}
export default TraineeController.getInstance();

