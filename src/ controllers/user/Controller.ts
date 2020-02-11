import { Request, Response, NextFunction } from 'express';
import userRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';

class UserController {
    static instance: UserController;
    // static userRepository: UserRepository;

    // userRepository = new UserRepository();

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
            userRepository.create({
                email, name, address, hobbies, dob, mobileNumber
            }).then(user => {
                return SystemResponse.success(res, user, 'user added successfully');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            console.log('error');
        }
    };
    list = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::list Trainee:::::::');
        try {
            const { _id } = req.query;
            userRepository.list(_id).then(user => {
                // userRepository.list(_id).then(user => {
                return SystemResponse.success(res, user, 'user listed successfully');

            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            console.log('error');
        }
    };
    Update = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Update Trainee:::::::');
        try {
            const { id, dataToUpdate } = req.body;
            userRepository.update({ _id: id }, dataToUpdate)// .then(user => {
                //  userRepository.update(id, dataToUpdate)
                .then(user => {
                    return SystemResponse.success(res, user, 'user updated successfully');
                }).catch(err => {
                    throw err;

                }).catch(err => {
                    throw err;
                });

        }
        catch (err) {
            console.log('error');
        }
    };
    delete = (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Delete Trainee:::::::');
        try {
            const { _id } = req.params;
            // userRepository.delete({ _id }).then(user => {
            userRepository.delete(_id).then(user => {
                return SystemResponse.success(res, user, 'user deleted successfully');

            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            console.log('error');
        }
    };

}

export default UserController.getInstance();