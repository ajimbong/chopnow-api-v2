const AppError = require("../utils/CustomErrorClass");

// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(error, req, res, next) {
    if (error instanceof AppError)
        res.status(error.statusCode).json({error: error.message})
    res.status(500).json({ error: 'Sorry something went wrong' });
}