class AppError extends Error{
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
        this.data = new Date;

        if (Error.captureStackTrace)
            Error.captureStackTrace(this, this.constructor);
        
        }

    static badRequest(message) {
        return new AppError(message, 400);
    }

    static internalServerError(message) {
        return new AppError(message, 400);
    }
}

module.exports = AppError;