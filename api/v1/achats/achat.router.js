const {
  getAchats,
  getAchatById,
  addAchat,
  deleteAchatById,
  updateAchatById,
} = require('./achat.controller');
const { checkToken } = require('../../../auth/token_validation');
const router = require('express').Router();
const myMulter = require('../../../middleware/multer');
const rateLimit = require('express-rate-limit');

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // start blocking after 5 requests
  message:
    'Too many accounts created from this IP, please try again after an hour',
});

/** POST /api/v1/users/register - Create new user */
router.get('/', checkToken, getAchats);
/** POST /api/v1/users/register - Create new user */
router.post('/', addAchat);
/** GET /api/v1/users/:id - Get user by id */
router.get('/:id', checkToken, getAchatById);
/** POST /api/v1/users/login - Authenticate user */
router.delete('/:id', deleteAchatById);
/** POST /api/v1/users/login - Authenticate user */
router.patch('/:id', updateAchatById);

module.exports = router;
