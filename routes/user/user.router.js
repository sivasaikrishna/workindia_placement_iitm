const router = require("express").Router();
const {userLogin, userRegister}  = require('./user.controller');

// ping route: testing
router.get("/ping", (req, res) => {
  res.send("pong");
});

router.post("/app/user", userRegister);
router.post("/app/user/auth", userLogin);

module.exports = router;