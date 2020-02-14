import VersionableSchema from '../versionable/ VersionableSchema';

class UserSchema extends VersionableSchema {
  constructor(collections: any) {
    const baseSchema = Object.assign({
      // id: String,
      name: String,
      address: String,
      role: String,
      email: String,
      dob: Date,
      mobileNumber: Number,
      hobbies: [String]
    });
    super(baseSchema, collections);
  }
}
export default UserSchema;

