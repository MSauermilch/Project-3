const router = require("express").Router();
const tacoRoutes = require("./tacos");

//drink routes
router.use("/tacos", tacoRoutes);

module.exports = router;