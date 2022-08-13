const express = require("express");
const { getAllCategories, newCategory } = require("../controllers/categoriesController");
const authentication = require("../middlewares/userAuthentication");

const router = express.Router();
/**
 * Thit is route is for geting all categories from database
 */

router.route("/load_categories").get(authentication, getAllCategories);

module.exports = router;