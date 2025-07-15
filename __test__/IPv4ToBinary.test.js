const { IPv4ToBinary } = require('../src/IPv4ToBinary');

describe('IPv4ToBinary', () => {
	test('converts valid IPv4 addresses to binary', () => {
		expect(IPv4ToBinary('192.168.0.1')).toBe('11000000.10101000.00000000.00000001');
		expect(IPv4ToBinary('127.0.0.1')).toBe('01111111.00000000.00000000.00000001');
		expect(IPv4ToBinary('255.255.255.255')).toBe('11111111.11111111.11111111.11111111');
		expect(IPv4ToBinary('0.0.0.0')).toBe('00000000.00000000.00000000.00000000');
	});

	test('throws an error for invalid IPv4 addresses', () => {
		expect(() => IPv4ToBinary('')).toThrow('Invalid IPv4 address');
		expect(() => IPv4ToBinary('256.100.100.100')).toThrow('Invalid IPv4 address');
		expect(() => IPv4ToBinary('192.168.1')).toThrow('Invalid IPv4 address');
		expect(() => IPv4ToBinary('192.168.1.abc')).toThrow('Invalid IPv4 address');
		expect(() => IPv4ToBinary('192.168.01.1')).toThrow('Invalid IPv4 address');
	});
});
