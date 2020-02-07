import { IUserCreate } from './entities';
import { UserModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';

class UserRepository {
    private UserModel: mongoose.Model<IUserModel>;
    constructor() {
        this.UserModel = UserModel;
    }
    create = (data) => {
        return this.UserModel.create(data);
    }
    update = () => {

    }
    list = () => {

    }
    delete = () => {

    }
}
export default UserRepository;
