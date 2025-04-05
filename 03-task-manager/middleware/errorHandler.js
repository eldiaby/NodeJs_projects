const { CustumeError } = require(`./../errors/CustumError.js`);

module.exports.errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustumeError) {
    return res.status(err.statusCode).json({
      status: 'fail',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'fail',
    message: `Something went wrong, Please try again later...`,
  });
};
