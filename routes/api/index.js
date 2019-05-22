const router = require("express").Router();
const tacoRoutes = require("./tacos");
// const userRoutes = require('./users');
// const userSigninRoutes = require('./signin');

//tacos routes
router.use("/tacos", tacoRoutes);
// router.use("/users", userRoutes);
// router.use("/signin", userSigninRoutes);

module.exports = router;