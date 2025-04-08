const express = require(`express`);
const appController = require(`./../controllers/main.js`);
const authMiddleware = require(`./../middleware/auth.js`);

const router = express.Router();

router
  .route(`/dashbourd`)
  .get(authMiddleware.authorizationMiddleware, appController.dashbourd);
router.route(`/login`).post(appController.login);

module.exports = router;
