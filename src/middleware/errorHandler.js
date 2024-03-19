const errorHandler = (error, req, res, next)=>{
    res.locals.message = error.message;
    res.locals.error = req.app.get('env') === 'development' ? error : {};

    const status = error.status  || 500
    const message = error.message || 'Internal Server Error'
    res.status(status).json({status, error: message})

};

module.exports = {errorHandler};