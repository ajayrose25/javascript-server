import { diamond, equilateral } from './patterns';
import { permissions } from './constants';
import { hasPermission, validateUsers } from './utils';
  
diamond(3);
equilateral(3);

console.log(hasPermission(permissions.getUsers, "trainee", "read"));
console.log(hasPermission(permissions.getUsers,"trainee","write"));
console.log(hasPermission(permissions.getUsers,"trainer","read"));
console.log(hasPermission(permissions.getUsers,"trainee","all"));


const users = [
    {
      traineeEmail : "trainee1@successive.tech",
      reviewerEmail : "reviewer1@successive.tech",
    },
    {
      traineeEmail : "trainee2@successive.tech",
      reviewerEmail : "reviewer2@successive.tech",
    },
    {
      traineeEmail : "trainee3@successive.tech",
      reviewerEmail : "reviewer3@successive.tech",
    },
    {
      traineeEmail : "trainee4@successive.tech",
      reviewerEmail : "reviewer4@successive.tech",
    },
  ];
 

  validateUsers(users);
  