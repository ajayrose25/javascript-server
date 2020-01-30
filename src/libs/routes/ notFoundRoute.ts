const notFoundRoute = (( req, res, next ) => {
next ({
        error: 'not found',
        code: '404'
    });
});

export default notFoundRoute;