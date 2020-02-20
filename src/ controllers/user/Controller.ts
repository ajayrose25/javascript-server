import { Request, Response, NextFunction } from 'express';
import SystemResponse from '../../libs/SystemResponse';
import UserRepository from '../../repositories/user/UserRepository';
import * as  bcrypt from 'bcrypt';
import configuration from '../../config/configuration';
import * as jwt from 'jsonwebtoken';
import user from '../../libs/seedData';
import { config } from 'dotenv/types';
import { hashValue } from '../../libs/seedData';

class UserController {
    static instance: UserController;
    private userRepository: UserRepository;
    private instance: UserController;
    constructor() {
        this.userRepository = new UserRepository();
    }
    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, name, address, hobbies, dob, mobileNumber } = req.body;
            // const data = { email, name, address, hobbies, dob, mobileNumber };
            const result = await this.userRepository.create({
                email,
                name,
                address,
                hobbies,
                dob,
                mobileNumber,
            });
                console.log('result', result);
                return SystemResponse.success(res, result, 'user added successfully');
            }
        
        catch (err) {
            console.log('error');
        }
    }
    getAll = async (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::list Trainee:::::::');
        try {
            // const { _id } = req.query;
    const result = await this.userRepository.getAll().then(result => {
                // userRepository.list(_id).then(user => {
                console.log('resulttttttttttttt', result);
                const [{ _id }] = result;
                return SystemResponse.success(res, _id, 'user listed successfully');
            }).catch(error => {
                throw error;
            });
        }
        catch (err) {
            console.log('error');
        }
    };
    Update = async (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Update Trainee:::::::');
        try {
            const { id, dataToUpdate } = req.body;
        const result = await this.userRepository.update({ _id: id }, dataToUpdate); // .then(user => {
                //  userRepository.update(id, dataToUpdate)
                    const { _id } = result;
                    return SystemResponse.success(res, _id, 'user updated successfully');
 }
        catch (err) {
            console.log('error');
        }
    };
    delete = async (req: Request, res: Response, next: NextFunction) => {
        console.log(':::::::Delete Trainee:::::::');
        try {
            console.log(req.params, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>====');
            const { id } = req.params;
            console.log(id, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
            // userRepository.delete({ _id }).then(user => {
            const result = await this.userRepository.delete({ _id: id });
                return SystemResponse.success(res, result, 'user deleted successfully')
        }
        catch (err) {
            console.log('error');
        }
    }
    login = async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;
        const users = await this.userRepository.getById({email});
        if (!users) {
            next ({
                error: 'password does not match',
                status: 422
            });
                }
               bcrypt.compare(password, hashValue, (err, result) => {
                console.log('result', res, password);
                // console.log('password.hash',hash);
                // console.log('errorrrr',err);
                if (!result) {
                    next ({
                        error: 'password does not match',
                        status: 422
                    });
                }
                console.log('password matched');
                const user = this.userRepository.getById({email});
                const token = jwt.sign({email: user['email'], id: user['originalId']}, configuration.secretKey);
                console.log('Token is', token);
                res.status(200).send({message: 'Login successful', data: token});
            });
    }
}

export default UserController.getInstance();