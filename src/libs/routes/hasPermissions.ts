export default function hasPermission(moduleName: object, role: string, permissionType: string): boolean {
    const roles = moduleName[permissionType];
    let decide = false;
    roles.forEach(element => {
      if (element === role) {
        decide = true;
      }
    });
    return decide;
  }
  