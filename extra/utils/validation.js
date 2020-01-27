import { validateEmail }  from './helpers';

export default function validateUsers(users){
  console.log("----------inside validation", users);
  let validUsers = [];
  let inValidUsers = [];
  users.forEach(function(value){
        
  if(validateEmail(value.reviewerEmail) && validateEmail(value.traineeEmail)){
    validUsers.push(value);
    }
  else{
    inValidUsers.push(value);
    }
  });
    
console.log("validUsers: ",validUsers.length);
console.log("inValidUsers: ",inValidUsers.length);

}


