const fs = require('fs');

function writeJson(jsonObj) {
	let json = JSON.stringify(jsonObj)
	fs.writeFile('data.json', json, 'utf-8', (err) => {
		if (err) throw err;
		console.log("Updated file saved");
	});
}

module.exports = {
	writeJson
}