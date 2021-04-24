const express = require("express");
const router = express.Router();
var homeroutes = require("./home");

router.use('/',homeroutes);

module.exports = router;
