const express = require("express");
const router = express.Router();

const postController = require("../controllers/staticController");

router.get("/", postController.index);
router.post("/posts/create", postController.create);

module.exports = router;