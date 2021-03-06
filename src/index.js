import '../sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';

class MayajiApp extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<LoginForm />
			</div>
		);
	}
}

(function() {
	ReactDOM.render(
		<MayajiApp />,
		document.getElementById('content')
	);
})();
