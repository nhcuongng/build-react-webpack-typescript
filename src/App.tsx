
import { Hello } from '@Components/Hello';
import React from 'react';

import './App.css';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>I am Cuong</h1>
				<Hello />
			</div>
		);
	}
}

export default App;