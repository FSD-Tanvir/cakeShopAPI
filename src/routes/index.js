const express = require("express");
const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");
const cakeRoutes = require("../modules/cakes/cake.routes");

const moduleRoutes = [
	{
		path: "/auth",
		route: authRoutes,
	},
	{
		path: "/cakes",
		route: cakeRoutes,
	}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
