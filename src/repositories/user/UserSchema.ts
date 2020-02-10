import * as mongoose from 'mongoose';
import { userSchema } from './UserModel';

class UserSchema extends mongoose.Schema {
  constructor(options) {
    const userSchema = {
      id: String,
      name: String,
      address: String,
      email: String,
      dob: Date,
      mobileNumber: Number,
      hobbies: [String]
    };
    super(userSchema, options);
  }
}
export default UserSchema;

