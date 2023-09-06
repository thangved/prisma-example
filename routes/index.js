const { Router } = require("express");

const router = Router();

router.use("/users", require("./user.route"));

module.exports = router;
