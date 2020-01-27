const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
    }
    function haspermission(modulename,role,permissiontype)
    {
        let roles=modulename[permissiontype];
        let decide=false;
        roles.forEach(element => {
        if(element===role){
            decide=true;
        }
       
        });
    return decide;     

    }
    const {getUsers} = permissions
    console.log(haspermission(getUsers,"trainee","read"))
    console.log(haspermission(getUsers,"trainee","write"))
    console.log(haspermission(getUsers,"trainer","read"))
    console.log(haspermission(getUsers,"trainee","all"))