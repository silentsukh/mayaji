import fetch from 'isomorphic-fetch';

export const ActionTypes = {
	
	/* Async Actions */
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	FETCH_ACCOUNTS_SUCCESS: 'FETCH_ACCOUNTS_SUCCESS',
	FETCH_ACCOUNTS_FAILURE: 'FETCH_ACCOUNTS_FAILURE',

	/* User Actions */
	REQUEST_LOGIN: 'REQUEST_LOGIN',
	REQUEST_ACCOUNTS: 'REQUEST_ACCOUNTS',
	SELECT_ACCOUNT: 'SELECT_ACCOUNT'
};

export function requestLogin(apiKey) {
	return {
		type: ActionTypes.REQUEST_LOGIN,
		apiKey
	};
}


// Async action
export function processLogin(apiKey, username, unsafePassword) {
/*
	return dispatch => {
		dispatch(requestLogin());
		return fetch('projects.json')
			.then(response => response.json())
			.then(json => dispatch(receiveProjectsSuccess(json)),
				error => dispatch(receiveProjectsFailure(error)));
	};
*/}