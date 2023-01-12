// Require our dependencies
const fs = require('fs');
const config = require('./config');

const express = require('express');
const compression = require('compression')
const app = express();
const cors = require('cors');
const helmet = require('helmet');

///////////////////////////
//     Check config      //
///////////////////////////

if (config.front_url.endsWith("/") || config.url.endsWith("/")) {
	console.log("Config URLs should not end with /");
	process.exit(1);
}

///////////////////
// HTTPS for DEV //
///////////////////

let server;

if (config.https) {
	// HTTPS server
	server = require('https').createServer({
		key: fs.readFileSync(config.ssl_key),
		cert: fs.readFileSync(config.ssl_crt)
	}, app);
} else {
	// HTTP server - requires behind a proxy
	server = require('http').createServer(app);
}


////////////////////
// Secure Headers //
////////////////////

app.use(helmet());
app.use(
	cors({
		credentials: true,
		origin: true,
	}),
);
app.use(compression({
	filter: (req, res) => {
		if (req.headers['x-no-compression']) {
			// don't compress responses with this request header
			return false
		}
		return compression.filter(req, res)
	},
	level: 9 // Best compression
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', true);  // TRUST PROXY
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
	res.redirect(config.front_url);  // Nothing to see here
})

///////////////////////////////
//          Routes           //
///////////////////////////////

/************** files ******************/
app.get('/program', function (req, res) {
	const file = `${__dirname}/assets/${req.query.version == "short" ? "program_short" : "program"}.pdf`;
	console.log(file)
	fs.stat(file, (err) => {
		if (err == null) {
			res.download(file);
		} else if (err.code === 'ENOENT') {
			// file does not exist
			res.sendStatus(404);
		} else {
			res.sendStatus(500);
		}
	});
})


///////////////////////
// Initialize server //
///////////////////////

server.listen(config.port, '0.0.0.0');
console.log('Server listening on port : ' + config.port);

