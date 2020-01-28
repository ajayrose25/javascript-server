import { validateEmail } from './helpers';

export default function validateUsers(users: any): void {
  console.log('----------inside validation', users);
  const validUsers = [];
  const inValidUsers = [];
  users.forEach((value) => {

    if (validateEmail(value.reviewerEmail) && validateEmail(value.traineeEmail)) {
      validUsers.push(value);
    }
    else {
      inValidUsers.push(value);
    }
  });

  console.log('validUsers: ', validUsers.length);
  console.log('inValidUsers: ', inValidUsers.length);

}


