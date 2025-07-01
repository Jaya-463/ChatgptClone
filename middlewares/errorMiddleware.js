const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;
    //mongoose casterror
    if (err.name == 'castError') {
        const messsage = 'resourses Not Found';
        error = new errorResponse(message, 404)
    }
    //duplicate ky error
    if (err.code === 11000) {
        const message = 'Duplicate feild value enterd';
        error = new errorResponse(message, 400);
    }
    //mongose validation
    if (err.name == 'Validationerror') {
        const message = Object.value(err.errors).map(val => val.message);
        error = new errorResponse(message, 400);
        res.status(error.statusCode || 500).json({
            sucess: false,
            error: error.message || 'Server error',
        });
    }

};
module.exports = errorHandler;