const permissions = {     //Permissions is a object having various arrays and it is used to check all operations a person can perform
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
    }
    function HasPermission(ModuleName,role,PermissionType)
    {
        let roles=ModuleName[PermissionType];
        let decide=false;
        roles.forEach(element => {
        if(element===role){
            decide=true;
        }
       
        });
    return decide;     

    }
    const {getUsers} = permissions
    console.log(HasPermission(getUsers,"trainee","read"))
    console.log(HasPermission(getUsers,"trainee","write"))
    console.log(HasPermission(getUsers,"trainer","read"))
    console.log(HasPermission(getUsers,"trainee","all"))