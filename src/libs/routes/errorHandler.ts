const errorHandler = ((err, req, res, next) => {
    console.log('Error', err);
    const obj =  {
        error: Error || 'undefined',
        message: err.error || err.message,
        status: 500,
        timestamp: new Date()
    };
    const { error, message, status, timestamp } = obj;
    res.send({
    obj
});
});
export default errorHandler;