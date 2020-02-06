import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import   hasPermission  from './hasPermissions';
 
export default (module, permissionType) => (req: Request, res: Response, next: NextFunction, decodedUser: number) => {
 try { console.log(':::::authMiddleware:::::', module, permissionType);
  const token: string = req.headers ['authorization'];
  console.log('Jwt is', );
  const {secretKey: key} = config;
  const decodedUser = jwt.verify(token, key);
  console.log('Jwt is', decodedUser);
  if(!decodedUser){
    next({
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorised'
    });
  }
  if (!hasPermission(module, decodedUser.role, permissionType)) {
    next({
      status: 403,
      error: 'Unauthorised',
      message: 'Permission Denied'
    });
  }
  console.log('user is', decodedUser);
  const { secretKey } = config;
  next();
 }
 catch (error) {
   next({
     status: 403,
     error: 'Unauthorised',
     message: error.message
   });
 }
 next();
}; 
