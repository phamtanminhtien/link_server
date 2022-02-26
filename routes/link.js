const router = require("express").Router();
const generate = require("../controllers/link/generate");
const get = require("../controllers/link/get");
const getAll = require("../controllers/link/getAll");

router.post("/generate", generate);

router.get("/getAll", getAll);

router.get("/:linkId", get);

module.exports = router;
