export default function hasPermission(moduleName, role: string, permissionType: string): boolean {
  console.log(moduleName);
    const roles = moduleName[permissionType];
    
    let decide = false;
    console.log(roles);
    roles.forEach(element => {
      if (element === role) {
        decide = true;
      }
    });
    return decide;
  }
  