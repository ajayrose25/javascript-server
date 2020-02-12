import mongoose from 'mongoose';
export default interface IUserCreate extends mongoose.Document {
    name: string;
    address: string;
    emails: string;
    dob: Date;
    mobileNumber: number;
    hobbies: string[];
}