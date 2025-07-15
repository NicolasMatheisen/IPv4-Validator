function isValidOctet(octet) {
	if (typeof octet !== 'string' || octet.length === 0) {
		return false;
	}

	if ((octet[0] === '0' && (octet[1] === 'x' || octet[1] === 'X'))) {
		const hexPart = octet.slice(2);
		if (hexPart.length < 1 || hexPart.length > 2) {
			return false;
		}
		for (let i = 0; i < hexPart.length; i++) {
			const c = hexPart[i];
			const code = c.charCodeAt(0);
			const isDigit = code >= 48 && code <= 57;
			const isUpper = code >= 65 && code <= 70;
			const isLower = code >= 97 && code <= 102;
			if (!(isDigit || isUpper || isLower)) {
				return false;
			}
		}
		const value = parseInt(hexPart, 16);
		return value >= 0 && value <= 0xFF;
	}

	for (let i = 0; i < octet.length; i++) {
		const code = octet.charCodeAt(i);
		if (code < 48 || code > 57) {
			return false;
		}
	}
	if (octet.length > 1 && octet[0] === '0') {
		return false;
	}
	const decValue = parseInt(octet, 10);
	return decValue >= 0 && decValue <= 255;
}

module.exports = { isValidOctet };
