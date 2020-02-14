import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';
import hasPermission from './hasPermissions';
import userRepository from '../../repositories/user/UserRepository';
import IRequest from './IRequest';

export default (module, permissionType) => async (req: IRequest, res: Response, next: NextFunction) => {
  try {
    console.log(':::::authMiddleware:::::', module, permissionType);
    const token: string = req.headers.authorization;
    console.log('Jwt is', token);
    if (!token) {
      next({
        status: 403,
        error: 'Unauthorized',
        message: 'Unauthorised'
      });
    }
    const { secretKey: key } = config;
    console.log(key, "key>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(token, "TOKEN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    const decodedUser = jwt.verify(token, key);
    const { role } = decodedUser;
    console.log('decoded', decodedUser);
    if (!decodedUser) {
      next({
        status: 403,
        error: 'Unauthorized',
        message: 'Unauthorised'
      });
    }
    const { _id, email } = decodedUser;
    await new userRepository()
      .getById({_id, email})
      .then(user => {
        if (!user) {
          next({
            status: 403,
            error: 'Unauthorized Access',
            message: 'Permission Denied'
          });
        }
        console.log("[{{{{{{{{{{{{{{{{{{{{{{{{{{{{",user, "useruseruser}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}")
        console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}",req.user, "req.userreq.user{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{")
        // req.user = user;
      })
      .then(() => {
        if (!hasPermission(module, role, permissionType)) {
          console.log('>>>>>>>>>>>>>>>>>>>.hsdhshsdhsdhsdhhshsh')
              next({
                status: 403,
                error: 'Unauthorised',
                message: 'Permission Denied'
              });
            }

      });
    next();
  }
  catch (error) {
    next({
            status: 403,
            error: 'Unauthorised',
            message: error.message
          });
  }
};

