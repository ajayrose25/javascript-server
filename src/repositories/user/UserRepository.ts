import { UserModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository < IUserModel, mongoose.Model <IUserModel>> {
    // static instance: UserRepository;
    private UserRepository: UserRepository;
    private UserModel: mongoose.Model<IUserModel>;
    constructor() {
        super(UserModel);
        this.UserModel = UserModel;
    }
   // static getInstance = () => {
     //    if (UserRepository.instance) {
       //      return UserRepository.instance;
       //  }
       //  UserRepository.instance = new UserRepository();
       //  return UserRepository.instance;
    // }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public count() {
        return super.count();
    }

    public create(data: any) {
        console.log('data', data);
        return super.create(data);
    }
    // create = (data) => {
    //     return this.UserModel.create(data);
    // }

    findUpdate = (data) => {
        return this.UserModel.findOne(data);
    }
    getById = data => {
        return this.UserModel.find(data);
    }
    update = (_id, data) => {
        return super.update(_id, data);
    }
    getAll = () => {
        return super.getAll();
    }
    delete = (_id) => {
        return super.delete(_id);
    }
}
// export default UserRepository.getInstance();

