const { Router } = require("express");
const { login, register } = require("../controllers/userController");
const { validate } = require('../validators/index');
const { rules: loginRules } = require('../validators/auth/login'); 
const { rules: registerURules } = require('../validators/auth/register'); 
const router = Router();

router.route("/login").post([loginRules, validate ], login);
router.route('/register').post([loginRules, validate ],register);

module.exports = router;
