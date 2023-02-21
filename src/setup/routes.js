const {errorHandler} = require('../middleware');

module.exports = (app) => {
    app.use(errorHandler);
}