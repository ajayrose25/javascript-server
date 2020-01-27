
const users=[ {                           //Users is a array of objects having various emails which will be checked in below functions
traineeEmail : "trainee1@successive.tech",
reviewerEmail : "reviewer1@successive.tech"},

{
traineeEmail : "trainee2@successive.tech",
reviewerEmail : "reviewer2@successive.tech"},

{
traineeEmail : "trainee3@successive.tech",
reviewerEmail : "reviewer3@successive.tech"},

{
traineeEmail : "trainee4@successive.tech",
reviewerEmail : "reviewer4@successive.tech"},
];   
function ValidateEmail(mail) 
{
 let ab = /([a-zA-Z0-9])+@(successive)\.(tech)/g;

   if(ab.test(mail)) return true 
   else return false
}

function ValidateUsers(users){
    let validUsers = [];
    let inValidUsers = [];
    users.forEach(function(value){
        if(ValidateEmail(value.reviewerEmail) && ValidateEmail(value.traineeEmail)){
            validUsers.push(value);
        }
        else {
            inValidUsers.push(value);
        }
    });
    console.log("validUsers: ",validUsers.length);
    console.log("inValidUsers: ",inValidUsers.length);

}
console.log("function call: ",validateusers(users));