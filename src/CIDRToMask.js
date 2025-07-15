function CIDRToMask(cidr) {
	if (cidr === '') {
		throw new Error('Invalid CIDR prefix');
	}

	const prefix = Number(cidr);

	if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
		throw new Error('Invalid CIDR prefix');
	}

	const binaryMask = '1'.repeat(prefix).padEnd(32, '0');
	const mask = binaryMask.match(/.{8}/g).map(bin => parseInt(bin, 2)).join('.');

	return mask;
}

module.exports = { CIDRToMask };