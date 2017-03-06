import React from 'react';
import LoginForm from '../src/components/LoginForm';

describe('Login form', () => {
	it('should exist', () => {
		const lf = new LoginForm();
		expect(lf).to.exist;
	});
});