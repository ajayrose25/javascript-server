export default function hasPermission(moduleName, role, permissionType){
  let roles=moduleName[permissionType];
  let decide=false;
  roles.forEach(element => {
    if (element === role) {
      decide = true;
    }
  });
  return decide;     
}
  