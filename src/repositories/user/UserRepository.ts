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
    findUpdate = (data) => {
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
export default UserRepository;

