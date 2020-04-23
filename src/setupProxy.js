const { createProxyMiddleware } = require("http-proxy-middleware");

// This conf is only for dev. Use server.js for production
module.exports = function (app) {
	app.use(
		createProxyMiddleware("/shabbat", {
			target: "https://www.hebcal.com",
			changeOrigin: true,
		})
	);
};
