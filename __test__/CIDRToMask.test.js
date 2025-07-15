const { CIDRToMask } = require('../src/CIDRToMask');

describe('CIDRToMask', () => {
	test('returns correct subnet masks for valid CIDR prefixes', () => {
		expect(CIDRToMask('0')).toBe('0.0.0.0');
		expect(CIDRToMask('8')).toBe('255.0.0.0');
		expect(CIDRToMask('16')).toBe('255.255.0.0');
		expect(CIDRToMask('24')).toBe('255.255.255.0');
		expect(CIDRToMask('30')).toBe('255.255.255.252');
		expect(CIDRToMask('32')).toBe('255.255.255.255');
	});

	test('throws error for out-of-range values', () => {
		expect(() => CIDRToMask('-1')).toThrow('Invalid CIDR prefix');
		expect(() => CIDRToMask('33')).toThrow('Invalid CIDR prefix');
	});

	test('throws error for non-numeric input', () => {
		expect(() => CIDRToMask('abc')).toThrow('Invalid CIDR prefix');
		expect(() => CIDRToMask('12.5')).toThrow('Invalid CIDR prefix');
		expect(() => CIDRToMask('')).toThrow('Invalid CIDR prefix');
	});
});
