import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import   hasPermission  from './hasPermissions';
 
export default (module, permissionType) => (req: Request, res: Response, next: NextFunction) => {
 try { console.log(':::::authMiddleware:::::', module, permissionType);
  const token: string = req.headers ['authorization'];
  console.log('Jwt is', jwt);
  const decodedUser = jwt.verify(token, config.secretKey);
  if(!decodedUser){
    next({
      status: 403,
      error: 'unauthorised access',
      message: 'unauthorised access'
    });
  }
  if (!hasPermission(module, decodedUser.role, permissionType)) {
    next({
      status: 403,
      error: 'unauthorised access',
      message: 'trainee does not have permission'
    });
  }
  console.log('user is', decodedUser);
  const { secretKey } = config;
  next();
 }
 catch (error) {
   next({
     status: 403,
     error: 'unauthorised access',
     message: error.message
   });
 }
}; 