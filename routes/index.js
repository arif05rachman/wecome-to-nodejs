const router = require("express").Router();
const Controller = require("../controllers/people");

router.get("/", Controller.getName);
router.get("/umur", Controller.getUmur);

module.exports = router;
