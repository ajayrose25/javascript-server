import{ Request, Response, NextFunction } from 'express';

const errorHandler = ((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('Error', err);
    const obj = {
        error: err.message || 'undefined',
        message: err || err.message,
        status: 500,
        timestamp: new Date()
    };
    const { error, message, status, timestamp } = obj;
     res.send({
        obj
     });
    if (!res.headersSent) {
        return next(error);
    }
});
export default errorHandler;