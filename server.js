// Libs
const express = require('express');
const next = require('next');

// Resources
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()

	.then(() => {
		// Initialize UI-SERVER
		const server = express();

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) {
				console.log(`GENERAL ERROR: [${err}]`);
				throw err;
			}

		})
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});

module.exports = app;
