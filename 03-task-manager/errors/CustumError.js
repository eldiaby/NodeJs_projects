class CustumeError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustumeError = (message, statusCode) =>
  new CustumeError(message, statusCode);

module.exports = {
  CustumeError,
  createCustumeError,
};
