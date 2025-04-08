const expressAsyncHandler = require(`express-async-handler`);
const { BadRequestError } = require(`./../errors`);
const JWT = require('jsonwebtoken');

module.exports.login = expressAsyncHandler(async (req, res, next) => {
  // const query = { ...req.query };
  // console.log(req.query, query);

  const { userName, password } = req.body;

  if (!userName || !password) {
    throw new BadRequestError(`Please provide username and password`);
  }

  const id = new Date().getDate();

  const token = JWT.sign({ id, userName }, process.env.JWT_SECRET, {
    expiresIn: `30d`,
  });

  res.status(200).json({ msg: `user created`, token });
});

// =========================================================== //
// Dashboure
module.exports.dashbourd = expressAsyncHandler(async (req, res, next) => {
  // console.log(token);
  const user = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${user.userName}`,
    secret: `Here is your authorized data, Your luchy number is ${luckyNumber}`,
  });
});
