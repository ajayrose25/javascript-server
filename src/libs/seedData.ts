import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository();

export default() => {
    const user = {
        name: 'Head Trainer',
        address: 'Noida',
        dob: new Date(),
        email: 'vinay@nodeperts.com',
        mobileNumber: 8925558880,
        hobbies: ['Touring']
    };
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
};

