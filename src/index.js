const { isValidIPv4 } = require('./isValidIPv4');
const { IPv4ToBinary } = require('./IPv4ToBinary');
const { CIDRToMask } = require('./CIDRToMask');

if (require.main === module) {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readline.question('Bitte gib eine IPv4-Adresse ein (optional mit /CIDR): ', input => {
		let ip, prefix;

		if (input.includes('/')) {
			[ip, prefix] = input.split('/');
		}
		else {
			ip = input;
		}

		if (!isValidIPv4(ip)) {
			console.log(`"${ip}" ist keine gültige IPv4-Adresse.`);
			readline.close();
			return;
		}

		console.log(`"${ip}" ist eine gültige IPv4-Adresse.`);
		console.log(`Binärdarstellung: ${IPv4ToBinary(ip)}`);

		if (prefix !== undefined) {
			try {
				const mask = CIDRToMask(prefix);
				console.log(`CIDR-Präfix: /${prefix}`);
				console.log(`Subnetzmaske: ${mask}`);
			}
			catch (err) {
				console.error('Fehler bei CIDR-Umwandlung:', err.message);
			}
		}

		readline.close();
	});
}
