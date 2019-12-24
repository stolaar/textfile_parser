const express = require("express");
const router = express.Router();

const FilesController = require("../../controllers/FilesController");

// @method POST /api/files/
// @desc Reads from file
// @access Public
router.post("/", (req, res, next) => new FilesController(req, res, next).readFile())

module.exports = router;