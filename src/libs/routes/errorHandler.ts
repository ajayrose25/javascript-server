const errorHandler = ((err, req, res, next) => {
    console.log('Error', err);
    res.send({
        error: 'not found',
        message: 'error',
        status: 500,
        timestamp: new Date()
    });
});
export default errorHandler;