function errorHandler(err, req, res, next){

    console.log(err);

    let statusCode = err.status || 500
    let messageStatus = err.message || "internal server error"
    res.status(statusCode).json(messageStatus)
}

module.exports = {errorHandler}