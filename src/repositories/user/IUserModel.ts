import IVersionableDocument from '../versionable/ IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
    _id: string;
    name: string;
    address: string;
    email: string;
    role: string;
    dob: Date;
    mobileNumber: number;
    hobbies: string[];
}
