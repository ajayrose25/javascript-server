import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import configuration from '../config/configuration';
 export let hashValue ;
export default () => {
    const user = {
        name: 'Head Trainer',
        password: bcrypt.hash,
        address: 'Noida',
        dob: new Date(),
        email: 'vinay@nodeperts.com',
        mobileNumber: 8925558880,
        hobbies: ['Touring']
    };
    const userRepository = new UserRepository();
userRepository.count()
.then ((result: number) => {
    console.log('count is', result);
    if (!result) {
       userRepository.create(user);
        console.log('user seeded successfully');
        }
}).catch((err) => {
        console.log('Data is seeded already', err);
    });
    bcrypt.hash(configuration.password, 10, (err, hash) => {
         console.log('passwordddddd____hash', hash);
         hashValue = hash;
      });
    };
