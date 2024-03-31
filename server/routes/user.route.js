const express = require("express");

const router = express.Router();

const { test } = require("../controllers/users.controllers");

router.get("/", test);

module.exports = router;
