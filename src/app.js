const express = require('express');
const fs = require('fs');
const functions = require("./utilities/functions");
const services = require('services/services.js')

const app = express();
app.use(express.json());

// server starts listening on port 3000
const PORT = process.env.PORT || 3000;

// Read from data.json to initialize data
const data = require("./data/data.json")

app.listen(PORT, () => {
	console.log("Server listening on port: ", PORT);
});

// Health check
app.get("/health", (req, res) => {
	const status = {
		"Status": "Healthy"
	};
	res.status(200).send(status);
});

app.get("/tenants", (req, res) => {
	res.send(data)
})

app.get("/getPackagesForTenant", (req, res) => {
	console.log("Received request to get package for tenant: ", req.body.tenant)
	services.getPackagesForTenant(req, res)
})