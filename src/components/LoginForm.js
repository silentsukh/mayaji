import React from 'react';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form role="form">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="API Key" />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Username" />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Password" />
				</div>
				<div className="form-group">
					<input type="submit" value="Login" className="btn btn-primary" />
				</div>
			</form>
		);
	}
}
