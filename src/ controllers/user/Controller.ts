import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';

class UserController {
    static instance: UserController;
    static userRepository: UserRepository;

    userRepository = new UserRepository();

    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, name, address, hobbies, dob, mobileNumber } = req.body;
            this.userRepository.create({
                email, name, address, hobbies, dob, mobileNumber
            }).then(user => {
                return SystemResponse.success(res, user, 'trainee added successfully');
            }).catch(error => {
                throw error;
            })
        }
        catch (err) {

        }
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

export default  UserController.getInstance();