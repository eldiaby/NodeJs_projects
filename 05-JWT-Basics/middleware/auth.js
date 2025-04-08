const expressAsyncHandler = require(`express-async-handler`);
const { UnauthenticatedError } = require(`./../errors`);
const JWT = require('jsonwebtoken');

const authorizationMiddleware = expressAsyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith(`Bearer `)) {
    // For securety perpose you shouldn't back message like that but it's just for learning the JWT and debug it to see how it's work
    throw new UnauthenticatedError(
      `There is no token in the requiest headers`,
      401
    );
  }

  const token = authorization.split(` `)[1];

  try {
    const decodedUserToken = JWT.verify(token, process.env.JWT_SECRET);

    const { id, userName } = decodedUserToken;

    req.user = { userName, id };
    next();
  } catch (error) {
    throw new UnauthenticatedError(`You can't go to that route`, 401);
  }
});

module.exports = {
  authorizationMiddleware,
};
