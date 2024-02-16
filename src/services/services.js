const data = require("../data/data.json")

function getPackagesForTenant(req, res) {
	let tenant = req.body.tenant;
	let foundTenant = false
	for (let i = 0; i < data.tenants.length; i++) {
		let thisTenant = data.tenants[i]
		if (thisTenant.name === tenant) {
			res.status(200).send(thisTenant.packages)
			foundTenant = true
			break;
		}
	}
	if (!foundTenant) {
		res.status(400).send({"Error": "Invalid Tenant"})
	}
}

module.exports = {
	getPackagesForTenant
}
