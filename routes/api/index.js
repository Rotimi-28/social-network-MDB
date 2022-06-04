const router = require('express').Router();

const thought = require("./thought-routes");
const user = require("./user-routes");

router.use("/user", user);
router.use("/thought", thought);


module.exports = router;