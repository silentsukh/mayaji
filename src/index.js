import React from 'react';
import ReactDOM from 'react-dom';

class MayajiApp extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Welcome back!</h1>
			</div>
		);
	}
}

(function(window) {
	ReactDOM.render(
		<MayajiApp />,
		document.getElementById('content')
	);
})(window);
