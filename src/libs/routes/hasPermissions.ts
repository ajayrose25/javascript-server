export default function hasPermission(moduleName, role: string, permissionType: string): boolean {
  console.log(moduleName);
    const roles = moduleName[permissionType];
    
    let decide = false;
    console.log(roles);
    console.log(role);
    roles.forEach(element => {
      if (element === role) {
        decide = true;
        console.log('decide', decide);
        console.log('element', element);
      }
    });
    console.log(decide)
    return decide;
  }
  
  