const { isValidIPv4 } = require('../src/isValidIPv4');

describe('isValidIPv4', () => {
	test('returns true for valid IPv4 addresses', () => {
		expect(isValidIPv4('0.0.0.0')).toBe(true);
		expect(isValidIPv4('127.0.0.1')).toBe(true);
		expect(isValidIPv4('192.168.1.1')).toBe(true);
		expect(isValidIPv4('255.255.255.255')).toBe(true);
	});

	test('returns false for incorrect number of octets', () => {
		expect(isValidIPv4('')).toBe(false);
		expect(isValidIPv4('127.0.0')).toBe(false);
		expect(isValidIPv4('1.2.3.4.5')).toBe(false);
		expect(isValidIPv4('127.0.0.')).toBe(false);
	});

	test('returns false for invalid octets', () => {
		expect(isValidIPv4('256.0.0.1')).toBe(false);
		expect(isValidIPv4('-1.0.0.0')).toBe(false);
		expect(isValidIPv4('01.0.0.0')).toBe(false);
		expect(isValidIPv4('192.168.0.256')).toBe(false);
		expect(isValidIPv4('192.168.0.a')).toBe(false);
	});

	test('returns false for empty or malformed strings', () => {
		expect(isValidIPv4('.192.168.0.1')).toBe(false);
		expect(isValidIPv4('...')).toBe(false);
		expect(isValidIPv4(' ')).toBe(false);
	});

	test('returns false for non-string inputs', () => {
		expect(isValidIPv4(undefined)).toBe(false);
		expect(isValidIPv4(null)).toBe(false);
		expect(isValidIPv4(123)).toBe(false);
		expect(isValidIPv4({})).toBe(false);
		expect(isValidIPv4([])).toBe(false);
	});
});
