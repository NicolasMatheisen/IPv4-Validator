const { isValidOctet } = require('./isValidOctet');

function isValidIPv4(ip) {
	if (typeof ip !== 'string') {
		return false;
	}

	const parts = ip.split('.');
	if (parts.length !== 4) {
		return false;
	}

	return parts.every(isValidOctet);
}

module.exports = { isValidIPv4 };
