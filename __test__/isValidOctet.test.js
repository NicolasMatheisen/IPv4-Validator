const { isValidOctet } = require('../src/isValidOctet');

describe('isValidOctet', () => {
	test('returns true for valid decimal octets', () => {
		expect(isValidOctet('0')).toBe(true);
		expect(isValidOctet('1')).toBe(true);
		expect(isValidOctet('10')).toBe(true);
		expect(isValidOctet('255')).toBe(true);
	});

	test('returns false for invalid decimal octets', () => {
		expect(isValidOctet('')).toBe(false);
		expect(isValidOctet('abc')).toBe(false);
		expect(isValidOctet('12.3')).toBe(false);
		expect(isValidOctet('-1')).toBe(false);
		expect(isValidOctet('1234')).toBe(false);
		expect(isValidOctet('0000')).toBe(false);
		expect(isValidOctet('01')).toBe(false);
		expect(isValidOctet('001')).toBe(false);
		expect(isValidOctet('256')).toBe(false);
		expect(isValidOctet('999')).toBe(false);
	});

	test('returns true for valid hexadecimal octets', () => {
		expect(isValidOctet('0x0')).toBe(true);
		expect(isValidOctet('0x00')).toBe(true);
		expect(isValidOctet('0x1')).toBe(true);
		expect(isValidOctet('0xA5')).toBe(true);
		expect(isValidOctet('0xFF')).toBe(true);
		expect(isValidOctet('0Xff')).toBe(true);
		expect(isValidOctet('0X0')).toBe(true);
	});

	test('returns false for invalid hexadecimal octets', () => {
		expect(isValidOctet('0x')).toBe(false);
		expect(isValidOctet('0x123')).toBe(false);
		expect(isValidOctet('0xGG')).toBe(false);
		expect(isValidOctet('0x100')).toBe(false);
		expect(isValidOctet('0X1G')).toBe(false);
		expect(isValidOctet('0x-1')).toBe(false);
	});
});
