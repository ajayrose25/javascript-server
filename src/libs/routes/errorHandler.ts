const errorHandler = ((err, req, res, next) => {
    console.log('Error', err);

    const { error, message, status, timestamp } = err;
    const obj = {
        error: Error || 'undefined',
        message: err.error || err.message,
        status: 500,
        timestamp: new Date()
    };
     res.send({
        obj
     });
    if (!req.headerSent) {
        return next(error);
    }
});
export default errorHandler;