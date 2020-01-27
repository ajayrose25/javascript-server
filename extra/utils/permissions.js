const permissions = {     //Permissions is a object having various arrays and it is used to check all operations a person can perform
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
    }
    function hasPermission(moduleName,role,permissionType)
    {
        let roles=moduleName[permissionType];
        let decide=false;
        roles.forEach(element => {
        if(element===role){
            decide=true;
        }
       
        });
    return decide;     

    }
    const {getUsers} = permissions
    console.log(hasPermission(getUsers,"trainee","read"))
    console.log(hasPermission(getUsers,"trainee","write"))
    console.log(hasPermission(getUsers,"trainer","read"))
    console.log(hasPermission(getUsers,"trainee","all"))