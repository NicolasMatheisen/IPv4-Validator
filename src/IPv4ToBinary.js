const { isValidIPv4 } = require('./isValidIPv4');

function IPv4ToBinary(input) {
	if (!isValidIPv4(input)) {
		throw new Error('Invalid IPv4 address');
	}

	return input.split('.').map(octet => {
		const binary = parseInt(octet, 10).toString(2);
		return binary.padStart(8, '0');
	}).join('.');
}

module.exports = { IPv4ToBinary };
