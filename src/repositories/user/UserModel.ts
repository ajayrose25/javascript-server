import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';

export const userSchema = new UserSchema({
    collection: 'Users'
});

export const UserModel: mongoose.Model <IUserModel> = mongoose.model <IUserModel> ('user', userSchema, 'users', true);

