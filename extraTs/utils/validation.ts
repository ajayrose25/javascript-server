import { validateEmail } from './helpers';

export default function validateUsers(Iusers: any): void {
  console.log('----------inside validation', Iusers);
  const validUsers = [];
  const inValidUsers = [];
  Iusers.forEach((value) => {

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


