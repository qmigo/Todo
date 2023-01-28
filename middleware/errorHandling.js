const {CustomAPIError} = require('../errors/custom_error');

const errorHandler = (err, req, res, next) => {

    console.log(err.message);
    if( err instanceof CustomAPIError)
    return res.status(err.statusCode).send({msg:err.message})

    return res.status(500).send({msg:'Something Went Wrong'});
}

module.exports = errorHandler