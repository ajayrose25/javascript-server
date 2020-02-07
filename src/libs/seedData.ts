import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository();

export default() => {
    const user = {
        name: 'Head Trainer',
        address: 'Noida',
        dob: new Date ('25-01-1999'),
        email: 'ajay.rose@successive.tech',
        mobileNumber: 8920422537,
        hobbies: ['Reading']
    };
this.userRepository.count()
.then ((count) => {
    console.log('count is', count);
    if(!count) {
       return this.userRepository.create(user)
       .then((res) => {
           console.log('user seeded successfully', res);
        });
    }
    console.log('user already exists');
});
};