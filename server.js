const { createProxyMiddleware } = require("http-proxy-middleware");
const http = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
// If we dont have a port then use 8080
const port = process.env.PORT || 8080;

const app = express();
const dev = app.get("env") !== "production";
if (!dev) {
	app.use(compression());
	app.use(morgan("common"));
	app.use("/shabbat", createProxyMiddleware({ target: "https://www.hebcal.com", changeOrigin: true }));
	app.use(express.static(path.join(__dirname, "build")));
	// create a GET route
	app.get("/*", function (req, res) {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}

http.createServer(app).listen(port, function () {
	console.log(`Start listening at http://localhost:${port}`);
});
