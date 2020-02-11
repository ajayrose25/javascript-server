import { UserModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';

class UserRepository {
    static instance: UserRepository;
    static getInstance = () => {
        if (UserRepository.instance) {
            return UserRepository.instance;
        }
        UserRepository.instance = new UserRepository();
        return UserRepository.instance;
    }

    private UserModel: mongoose.Model<IUserModel>;
    constructor() {
        this.UserModel = UserModel;
    }
    create = (data) => {
        return this.UserModel.create(data);
    }
    findUpdate = (data) => {
        return this.UserModel.findOne(data);
    }
    findOne = data => {
        return this.UserModel.findById(data);
    }
    update = (_id, data) => {
        return this.UserModel.update(_id, data);
    }
    count = () => {
        console.log('Inside count');
        return this.UserModel.countDocuments();
    }
    list = (_id) => {
        return this.UserModel.find(_id);

    }
    delete = (id) => {
        return this.UserModel.deleteOne(id);
    }
}
export default UserRepository.getInstance();

